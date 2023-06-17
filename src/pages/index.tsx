import { contentsState } from "atoms/ContentsState";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import { useSetRecoilState } from "recoil";
import { TweetData } from "types";
type ThemeItem = {
  genre: string;
  topics: string[];
};

const themeItems: ThemeItem[] = [
  {
    genre: "教育",
    topics: [
      "教育方針",
      "性教育",
      "スクールチョイス",
      "学習障害",
      "テクノロジーの使用",
      "標準テスト",
    ],
  },
  {
    genre: "社会",
    topics: [
      "ジェンダー平等",
      "人種差別",
      "LGBTQ+の権利",
      "移民政策",
      "経済的平等",
      "環境問題",
    ],
  },
  {
    genre: "政治",
    topics: [
      "財政政策",
      "医療制度",
      "軍事政策と国防",
      "教育政策",
      "銃規制",
      "プライバシーと監視",
    ],
  },
  {
    genre: "健康",
    topics: [
      "ワクチン接種",
      "食事と栄養",
      "運動とフィットネス",
      "東洋医学",
      "メンタルヘルス",
      "睡眠",
    ],
  },
  {
    genre: "科学",
    topics: [
      "気候変動",
      "遺伝子組み換え食品",
      "人工知能",
      "原子力エネルギー",
      "5G技術",
      "宇宙探査",
    ],
  },
];

const Theme = ({
  theme,
  onClickTheme,
}: {
  theme: ThemeItem;
  onClickTheme: (theme: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start mb-4">
      <h2 className="text-left mb-2 text-lg font-bold">{theme.genre}</h2>
      <div className="grid grid-cols-2 gap-2">
        {theme.topics.map((topic, index) => (
          <button
            key={index}
            className="topic"
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

  const onClickTheme = async (theme: string) => {
    // const res = await fetch("/api/contents", {
    //   method: "POST",
    //   body: JSON.stringify({ theme }),
    // });
    // const contents = (await res.json()) as TweetData[];
    // console.log(contents);
    // setContentsState(contents);
    // router.push("/game");
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>テーマ選択</title>
      </Head>

      <header className="h-14 flex items-center px-10">
        <h1 className="text-2xl">サービス名</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center mb-32">
        <div className="text-3xl font-bold">興味ジャンル</div>
        {/* <div className="text-sm mt-2">テーマを選択してください</div> */}

        <div className="flex flex-col items-center mt-5">
          <div className="flex flex-col items-center">
            {themeItems.map((theme, index) => (
              <Theme key={index} theme={theme} onClickTheme={onClickTheme} />
            ))}
          </div>
        </div>

        {/* <div className="flex-grow" /> */}

        <Link href="/game">
          <button className="roundButton fixed bottom-16 left-1/2 transform -translate-x-1/2">
            完了
          </button>
        </Link>
      </main>

      {/* <footer className="h-14 flex items-center justify-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer> */}
    </div>
  );
}
