import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>テーマ選択</title>
      </Head>

      <header className="h-14 flex items-center px-10">
        <h1 className="text-2xl">テーマ選択</h1>
      </header>

      <main className="h-full flex justify-center">
        <Link href="/game">
          <button className="btn primary">スタート</button>
        </Link>
      </main>

      <footer className="h-14 flex items-center px-10">
        <h1 className="text-sm">Footer</h1>
      </footer>
    </div>
  );
}
