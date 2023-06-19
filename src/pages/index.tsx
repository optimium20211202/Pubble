import { contentsState } from "atoms/ContentsState";
import { Puddle } from "components/Puddle";
import Head from "next/head";
import router from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TweetData } from "types";
type ThemeItem = {
  genre: string;
  topics: string[];
};

const themeItems: ThemeItem[] = [
  {
    genre: "🏫 教育について",
    topics: [
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？1",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？2",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？3",
    ],
  },
  {
    genre: "🌍 社会について",
    topics: [
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？4",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？5",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？6",
    ],
  },
  {
    genre: "🗳 政治について",
    topics: [
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？7",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？8",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？9",
    ],
  },
  {
    genre: "🏥 健康のついて",
    topics: [
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？10",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？11",
      "タイムマシンがあったら、未来に行くべき？過去に行くべき？12",
    ],
  },
];

const Theme = ({
  theme,
  onClickTheme,
  selectedTheme,
}: {
  theme: ThemeItem;
  onClickTheme: (theme: string) => void;
  selectedTheme: string;
}) => {
  console.log(selectedTheme);
  return (
    <div className="flex flex-col items-start mb-4">
      <h2 className="text-left text-lg font-bold">{theme.genre}</h2>
      <div className="">
        {theme.topics.map((topic, index) => (
          <button
            key={index}
            className={
              "btn btn-block text-xs text-left mt-2 h-16 " +
              (selectedTheme === topic ? "bg-gray-300" : "bg-[#FFFFFF]")
            }
            onClick={() => onClickTheme(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const setContentsState = useSetRecoilState(contentsState);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [inputTheme, setInputTheme] = useState("");
  const [showModal, setShowModal] = useState(false);
  const onClickTheme = async (theme: string) => {
    setSelectedTheme(theme);
  };

  const generateContents = async (theme: string) => {
    console.log("generateContents");
    setIsLoading(true);
    const startTime = Date.now();
    const res = await fetch("/api/contents", {
      method: "POST",
      body: JSON.stringify({ theme: theme }),
    });
    const contents = (await res.json()) as TweetData[];

    const endTime = Date.now();
    console.log((endTime - startTime) / 1000);
    console.log(contents);
    setContentsState(contents);
    router.push("/game");
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Head>
        <title>テーマ選択</title>
      </Head>
      <header className="h-14 flex justify-center px-10">
        <Puddle className="" />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center mb-32">
        <div className="text-sm font-bold mt-6">
          好きなトピックを一つ選択してください
        </div>

        <div className="flex flex-col items-center mt-5 px-4">
          <div className="flex flex-col items-center">
            {themeItems.map((theme, index) => (
              <Theme
                key={index}
                theme={theme}
                onClickTheme={onClickTheme}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>
        </div>

        <button
          className="roundButton1 fixed bottom-32 left-1/2 transform -translate-x-1/2"
          onClick={() => {
            setShowModal(true);
          }}
          disabled={isLoading}
        >
          手動で入力する
        </button>

        <button
          className="roundButton2 fixed bottom-16 left-1/2 transform -translate-x-1/2"
          onClick={() => {
            if (selectedTheme === "") {
              return;
            }
            generateContents(selectedTheme);
          }}
          disabled={isLoading}
        >
          これでOK
        </button>

        {showModal && (
          <dialog id="my_modal_2" className="modal modal-open">
            <form method="dialog" className="modal-box">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-center">手動で入力する</h3>
              <textarea
                className="textarea w-full h-32 mt-4"
                placeholder="こちらにトピックを入力してください"
                value={inputTheme}
                onChange={(e) => setInputTheme(e.target.value)}
              ></textarea>
              <div className="text-center mt-4">
                <button
                  className="roundButton2"
                  onClick={() => {
                    if (inputTheme === "") {
                      return;
                    }
                    generateContents(inputTheme);
                  }}
                  disabled={isLoading}
                >
                  これでOK
                </button>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                close
              </button>
            </form>
          </dialog>
        )}
      </main>
    </div>
  );
}
