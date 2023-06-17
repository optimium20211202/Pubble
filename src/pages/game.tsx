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
    <div className="h-screen overflow-hidden">
      <Head>
        <title>フィルターバブル体験</title>
      </Head>
      <header className="h-14 flex items-center px-10">
        <h1 className="text-2xl">フィルターバブル体験</h1>
      </header>

      <main className="h-full flex justify-center mt-10">
        {contents.map((content, index) => (
          <SwipeableCard
            index={index}
            onSwipe={onSwipe}
            childRefs={childRefs}
            key={index}
          >
            <Tweet tweetData={content} />
          </SwipeableCard>
          // <TinderCard
          //   ref={childRefs[index]}
          //   className="swipe"
          //   onSwipe={onSwipe}
          //   // onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          //   preventSwipe={["up", "down"]}
          //   swipeRequirementType="position"
          //   swipeThreshold={30}
          //   key={index}
          // >
          //   <Tweet tweetData={content} />
          // </TinderCard>
        ))}
        <div className="mt-60 flex justify-center space-x-16">
          <button
            className="btn btn-circle bg-red-500"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            className="btn btn-circle bg-green-500"
            onClick={() => swipe("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>
        </div>
      </main>

      <footer className="h-14 flex items-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer>
    </div>
  );
}
