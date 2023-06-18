import Tweet from "components/Tweet";
import Head from "next/head";
// import TinderCard from "react-tinder-card";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { contentsState } from "atoms/ContentsState";
import Link from "next/link";
import { RefObject, createRef, useMemo, useState } from "react";
// import SwipeableCard from "components/SwipeableCard";
// const TinderCard = dynamic(() => import("react-tinder-card"), {
//   ssr: false,
// });

const SwipeableCard = dynamic(() => import("components/SwipeableCard"), {
  ssr: false,
});

type Direction = "up" | "down" | "left" | "right";
interface API {
  swipe(dir?: Direction): Promise<void>;
  restoreCard(): Promise<void>;
}

const Error = () => {
  return (
    <>
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error!</span>
      </div>
      <Link href="/">
        <button className="btn primary btn-wide mt-10">Topに戻る</button>
      </Link>
    </>
  );
};

export default function Game() {
  const contents = useRecoilValue(contentsState);
  const [currentIndex, setCurrentIndex] = useState(contents.length - 1);
  const canSwipe = currentIndex >= 0;

  const onSwipe = (direction: Direction) => {
    console.log("You swiped: " + direction);
    setCurrentIndex(currentIndex - 1);
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + " left the screen");
  };

  const childRefs: RefObject<API>[] = useMemo(
    () =>
      Array(contents.length)
        .fill(0)
        .map((i) => createRef()),
    [contents.length]
  );

  const swipe = async (direction: Direction) => {
    console.log(childRefs[currentIndex]?.current);
    if (canSwipe && currentIndex < contents.length) {
      await childRefs[currentIndex]?.current?.swipe(direction); // Swipe the card!
    }
  };

  if (contents.length === 0) {
    return <Error />;
  }

  return (
    <div
      className="h-screen"
      style={{ background: "linear-gradient(#DCFBFF, #F7D8FF)" }}
    >
      <Head>
        <title>フィルターバブル体験</title>
      </Head>
      <main className="relative h-full flex flex-col mx-auto max-w-[400px] px-4">
        <div className="mt-10">
          <div className="text-left mb-2 text-sm font-bold">⚡️ トピック</div>
          <div className="topic text-center" style={{ width: "100%" }}>
            ジェンダー平等について
          </div>
          <div className="text-left mt-6 text-sm font-bold">🚀 おすすめ</div>
        </div>
        {contents.map((content, index) => (
          <SwipeableCard
            index={index}
            onSwipe={onSwipe}
            childRefs={childRefs}
            key={index}
          >
            <Tweet tweetData={content} />
          </SwipeableCard>
        ))}
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
      </main>
    </div>
  );
}
