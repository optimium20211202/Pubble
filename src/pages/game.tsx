import Tweet from "components/Tweet";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { contentsState } from "atoms/ContentsState";
import Link from "next/link";
import { RefObject, createRef, useEffect, useMemo, useState } from "react";
import { TweetData } from "types";
// import router from "next/router";

// 最低でもここの確率で反対意見が出るようにする
const RANDOM_LIMIT = 0.2;

// ssrだと機能しないので
const SwipeableCard = dynamic(() => import("components/SwipeableCard"), {
  ssr: false,
});

type Direction = "up" | "down" | "left" | "right";
interface API {
  swipe(dir?: Direction): Promise<void>;
  restoreCard(): Promise<void>;
}

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const getNextIndex = (
  currentIndex: number,
  filteredIindexes: number[]
): number => {
  // filteredIndexに含まれていればskipする
  if (filteredIindexes.includes(currentIndex - 1)) {
    return getNextIndex(currentIndex - 1, filteredIindexes);
  }
  return currentIndex - 1;
};

// ユーザーに合わせて偏りがあるコンテンツをselect
const getNextTargetCardItem = (
  contens: TweetData[],
  lastIndex: number,
  prob: number
): number => {
  console.log(lastIndex);
  // probは0~1.0
  const random = Math.random();
  const targetLabel = prob < random ? 0 : 1;

  const filteredContents = contens
    .map((content, index) => ({ label: content.label, index }))
    .filter(({ label, index }) => {
      return index < lastIndex && label == targetLabel;
    })
    .map(({ index }) => index);

  if (filteredContents.length === 0) {
    return -1;
  }

  return Math.max(...filteredContents);
};

export default function Game() {
  const contents = useRecoilValue(contentsState);

  const [currentIndex, setCurrentIndex] = useState(contents.length - 1);
  const [filteredIindexes, setFilteredIindexes] = useState<number[]>([
    ...range(0, contents.length - 5),
  ]);
  const canSwipe = currentIndex >= 0;

  const [score, setScore] = useState(0.5);

  useEffect(() => {
    //  server side renderingだと初回のrender時にcontentsが空になるので
    if (contents.length > 0) {
      setCurrentIndex(contents.length - 1);
      setFilteredIindexes([...range(0, contents.length - 5)]);
    }
  }, [contents.length]);

  const onSwipe = (direction: Direction) => {
    console.log("You swiped: " + direction);
    const selectedLabel = contents[currentIndex].label;
    const isPositive = direction == "right";
    const adj = selectedLabel == 1 ? 1 : -1;

    const updatedScore = Math.max(
      0.0 + RANDOM_LIMIT,
      Math.min(
        isPositive ? score + 0.1 * adj : score - 0.1 * adj,
        1.0 - RANDOM_LIMIT
      )
    );
    setScore(updatedScore);

    const _nextIndex = getNextIndex(currentIndex, filteredIindexes);
    const targetCardItem = getNextTargetCardItem(
      contents,
      _nextIndex,
      updatedScore
    );

    const _filteredIindexes = filteredIindexes.filter(
      (index) => index !== targetCardItem
    );
    setFilteredIindexes(_filteredIindexes);

    setCurrentIndex(_nextIndex);
  };

  // const onCardLeftScreen = (myIdentifier: number) => {
  //   console.log(myIdentifier + " left the screen");
  //   // setFilteredIindexes([...filteredIindexes, myIdentifier]);
  // };

  const childRefs: RefObject<API>[] = useMemo(
    () =>
      Array(contents.length)
        .fill(0)
        .map((i) => createRef()),
    [contents.length]
  );

  const swipe = async (direction: Direction) => {
    // console.log(childRefs[currentIndex]?.current);
    if (canSwipe && currentIndex < contents.length) {
      await childRefs[currentIndex]?.current?.swipe(direction); // Swipe the card!
    }
  };

  return (
    <div
      className="h-screen"
      style={{ background: "linear-gradient(#DCFBFF, #F7D8FF)" }}
    >
      <Head>
        <title>フィルターバブル体験</title>
      </Head>
      {/* <header className="h-14 flex justify-center px-10">
        <h1 className="text-2xl">PUBBLE</h1>
      </header> */}
      <main className="relative h-full flex flex-col mx-auto w-80 px-4">
        <div className="mt-10">
          <div className="text-left mb-2 text-sm font-bold">⚡️ トピック</div>
          <div className="topic text-center" style={{ width: "100%" }}>
            ジェンダー平等について
          </div>
          <div className="text-left mt-6 text-sm font-bold">🚀 おすすめ</div>
        </div>
        {contents.map(
          (content, index) => (
            <SwipeableCard
              index={index}
              hide={filteredIindexes.includes(index)}
              onSwipe={onSwipe}
              // onCardLeftScreen={onCardLeftScreen}
              childRef={childRefs[index]}
              key={index}
            >
              <Tweet tweetData={content} />
            </SwipeableCard>
          )
          // )
        )}
        {currentIndex < 0 ? (
          <div className="w-full flex justify-center">
            <Link href="/">
              <button className="btn btn-outline btn-wide mt-10">
                Topに戻る
              </button>
            </Link>
          </div>
        ) : (
          <div className="mt-80 flex justify-center space-x-24 mb-10">
            <button
              className="btn btn-circle bg-[#D45454]"
              onClick={() => swipe("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              className="btn btn-circle bg-[#41B55A]"
              onClick={() => swipe("right")}
            >
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.562 0C15.1666 0 13 4.36362 13 4.36362C13 4.36362 10.8335 0 6.43806 0C2.86596 0 0.0372528 3.00953 0.000692198 6.60066C-0.073783 14.0549 5.87273 19.3561 12.3907 23.8111C12.5704 23.9342 12.7827 24 13 24C13.2173 24 13.4297 23.9342 13.6093 23.8111C20.1266 19.3561 26.0731 14.0549 25.9993 6.60066C25.9628 3.00953 23.1341 0 19.562 0Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
