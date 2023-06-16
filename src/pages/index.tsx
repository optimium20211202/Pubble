import { contentsState } from "atoms/ContentsState";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import { useSetRecoilState } from "recoil";
import { TweetData } from "types";

const themes = [
  "立憲、内閣不信任決議案を提出",
  "アプリストア 他社参入義務付けへ",
  "兄の瑛太「許さない」弟逮捕受け",
  "LGBT法が成立 差別助長の懸念も",
  "北発射ミサイル「衛星」とは別か",
  "日本留学の香港人学生 香港で起訴",
];

const Theme = ({
  theme,
  onClickTheme,
}: {
  theme: string;
  onClickTheme: (theme: string) => void;
}) => {
  return (
    <div
      className="badge cursor-pointer p-5 mb-2"
      onClick={() => onClickTheme(theme)}
    >
      {theme}
    </div>
  );
};

export default function Home() {
  const setContentsState = useSetRecoilState(contentsState);

  const onClickTheme = async (theme: string) => {
    const res = await fetch("/api/contents", {
      method: "POST",
      body: JSON.stringify({ theme }),
    });
    const contents = (await res.json()) as TweetData[];
    console.log(contents);
    setContentsState(contents);
    router.push("/game");
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Head>
        <title>テーマ選択</title>
      </Head>

      <header className="h-14 flex items-center px-10">
        <h1 className="text-2xl">テーマ選択</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="text-2xl">テーマ</div>
        <div className="text-sm mt-2">テーマを選択してください</div>

        <div className="flex flex-col items-center mt-5">
          <div className="flex flex-col items-center">
            {themes.map((theme) => (
              <Theme key={theme} theme={theme} onClickTheme={onClickTheme} />
            ))}
          </div>
        </div>

        {/* <div className="flex-grow" /> */}

        {/* <Link href="/game">
          <button className="btn primary btn-wide mt-10">決定</button>
        </Link> */}
      </main>

      <footer className="h-14 flex items-center justify-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer>
    </div>
  );
}
