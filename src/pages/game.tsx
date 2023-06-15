import Tweet from "components/Tweet";
import Head from "next/head";
// import TinderCard from "react-tinder-card";
import dynamic from "next/dynamic";
const TinderCard = dynamic(() => import("react-tinder-card"), {
  ssr: false,
});

type Direction = "up" | "down" | "left" | "right";

export default function Game() {
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
          <Tweet
            tweetData={{
              id: "1",
              content: "Hello, this is a tweet!",
              author: {
                name: "User1",
                profilePicture:
                  "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
              },
            }}
          />
        </TinderCard>
      </main>

      <footer className="h-14 flex items-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer>
    </div>
  );
}
