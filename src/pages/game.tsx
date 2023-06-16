import Tweet from "components/Tweet";
import Head from "next/head";
// import TinderCard from "react-tinder-card";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { contentsState } from "atoms/ContentsState";
const TinderCard = dynamic(() => import("react-tinder-card"), {
  ssr: false,
});

type Direction = "up" | "down" | "left" | "right";

export default function Game() {
  const contents = useRecoilValue(contentsState);
  if (contents.length === 0) {
    return (
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
    );
  }
  const onSwipe = (direction: Direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="h-screen">
      <Head>
        <title>フィルターバブル体験</title>
      </Head>
      <header className="h-14 flex items-center px-10">
        <h1 className="text-2xl">フィルターバブル体験</h1>
      </header>

      <main className="h-full flex justify-center">
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
        >
          <Tweet tweetData={contents[0]} />
        </TinderCard>
      </main>

      <footer className="h-14 flex items-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer>
    </div>
  );
}
