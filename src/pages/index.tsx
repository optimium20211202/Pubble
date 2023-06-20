import { contentsState } from "atoms/ContentsState";
import { Puddle } from "components/Puddle";
import Head from "next/head";
import router from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TweetData } from "types";
import GifGame from "components/MiniGame";
import { themeState } from "atoms/ThemeState";
import toast from "react-hot-toast";

type ThemeItem = {
  genre: string;
  topics: string[];
};

const themeItems: ThemeItem[] = [
  {
    genre: "📚 健康と教育",
    topics: [
      "小中学生はマスクをつけ続けるべきだ",
      "学校教育ではテクノロジーを積極的に活用すべきか？人間関係や実体験を重視すべきか？",
    ],
  },
  {
    genre: "🤖 テクノロジーと社会",
    topics: [
      "AIの発展は仕事の自動化による雇用の喪失、個人のプライバシー侵害、制御不能な技術の発展などのリスクを伴うため規制すべきか？",
      "タイムマシーンがあれば、未来に行くべきか、過去に行くべきか？",
    ],
  },
  {
    genre: "🔮 特殊能力と社会",
    topics: [
      "もし動物と話せる能力があったら、動物の意見を人間社会の決定に反映させるべきか？",
      "もし一日だけスーパーパワーを手に入れたら、それは人々を助けるために使うべきか、自分自身の楽しみのために使うべきか？",
    ],
  },
  {
    genre: "🚻 ジェンダーと役割",
    topics: [
      "男性と女性は本質的に異なるスキルと関心を持つか？",
      "お父さんとお母さん、最強なのはどちらか？",
    ],
  },
  {
    genre: "🪐 宇宙と倫理",
    topics: [
      "宇宙探査のための資金は地球上の問題、例えば貧困や環境問題の解決に使うべきか？",
      "宇宙人が地球を訪れたら、友好的な接触を試みるべきか、防衛的になるべきか？",
    ],
  },
  {
    genre: "🧚‍♀️ 物語と想像力",
    topics: [
      "童話の世界に住むとしたら、その世界に影響を与えるべきか、そのままの世界を楽しむべきか？",
      "もし自分が一日だけ漫画やアニメのキャラクターになれるとしたら、ヒーローキャラクターになるべきか、ヴィランキャラクターになるべきか？",
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
  return (
    <div className="flex flex-col items-start mb-4 w-80">
      <h2 className="text-left text-lg font-bold">{theme.genre}</h2>
      <div className="">
        {theme.topics.map((topic, index) => (
          <button
            key={index}
            className={
              "btn btn-block text-xs text-left leading-5 mt-2 h-auto justify-start " +
              (selectedTheme === topic
                ? "bg-[#4DABE0] text-white"
                : "bg-[#FFFFFF] text-[#444444]")
            }
            onClick={() => onClickTheme(topic)}
          >
            <span className="py-2">{topic}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const setContentsState = useSetRecoilState(contentsState);
  const setThemeState = useSetRecoilState(themeState);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [inputTheme, setInputTheme] = useState("");
  const [showInputModal, setShowInputModal] = useState(false);
  const [showWatingModal, setShowWaitingModal] = useState(false);

  const onClickTheme = async (theme: string) => {
    setSelectedTheme(theme);
  };

  const generateContents = async (theme: string) => {
    setShowWaitingModal(true);
    console.log("generateContents");
    setIsLoading(true);
    const startTime = Date.now();
    try {
      const res = await fetch("/api/contents", {
        method: "POST",
        body: JSON.stringify({ theme: theme }),
      });
      if (res.ok) {
        const contents = (await res.json()) as TweetData[];
        setContentsState(contents);
        setThemeState(theme);
        router.push("/game");
      } else {
        toast.error(
          "エラーが発生しました。入力内容を変更して再度お試しください。"
        );
        return;
      }
    } catch (e) {
      console.log(e);
      toast.error("エラーが発生しました");
      return;
    } finally {
      const endTime = Date.now();
      console.log((endTime - startTime) / 1000);
      setIsLoading(false);
      setShowWaitingModal(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Head>
        <title>トピック選択</title>
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
            setShowInputModal(true);
          }}
          disabled={isLoading}
        >
          手動で入力する
        </button>

        <button
          className="roundButton2 fixed bottom-16 left-1/2 transform -translate-x-1/2"
          onClick={() => {
            if (selectedTheme === "") {
              toast.error("トピックを選択してください。");
              return;
            }
            generateContents(selectedTheme);
          }}
          disabled={isLoading}
        >
          これでOK
        </button>

        {showInputModal && (
          <dialog className="modal modal-open">
            <form method="dialog" className="modal-box">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setShowInputModal(false);
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
                      toast.error("トピックを入力してください。");
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
                  setShowInputModal(false);
                }}
              >
                close
              </button>
            </form>
          </dialog>
        )}

        {showWatingModal && <GifGame />}
      </main>
    </div>
  );
}
