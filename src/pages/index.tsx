import Timeline from "components/Timeline";
import Head from "next/head";
import { TweetData } from "types";

const tweets: TweetData[] = [
  {
    id: "1",
    content: "Hello, this is a tweet!",
    author: {
      name: "User1",
      profilePicture:
        "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
    },
    replies: [
      {
        id: "1.1",
        content: "This is a reply.",
        author: {
          name: "User2",
          profilePicture:
            "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        },
      },
      // more replies here...
    ],
  },
  // more tweets here...
];

export default function Home() {
  return (
    <div className="h-screen bg-blue-600">
      <Head>
        <title>SNS体験</title>
        <meta
          name="description"
          content="Twitter UI Clone with Next.js and DaisyUI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-14 bg-blue-500 flex items-center px-10">
        <h1 className="text-white text-2xl">SNS体験</h1>
      </header>

      <main className="h-full flex justify-center">
        <Timeline tweets={tweets} />
      </main>

      <footer className="h-14 bg-blue-500 flex items-center px-10">
        <h1 className="text-white text-sm">Footer</h1>
      </footer>
    </div>
  );
}
