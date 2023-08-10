import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
  // searchParams: {
  //   contents: string;
  //   preference: string;
  // };
};
export default function Result1Page({
  params,
}: // searchParams: { contents, preference },
Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-9 font-bold text-xl">🎉 おつかれさまです！</div>
      <div className="mt-9">
        <Explanation
          imagePath="/result/result1.png"
          imageHeight={204}
          imageWidth={254}
          text={`いろいろなおすすめ投稿を通じて、あなたは、さまざまな意見について、ふれて、考えれたと思います。\n\nでも、本当にそうなのでしょうか？\nさっきのコメント一覧に色をつけてみたので、もう一度確認してみましょう！`}
        />
      </div>
      <Link className="mt-10" href={`/selection/topics/${topicId}/result2`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          コメント一覧
        </button>
      </Link>
    </main>
  );
}
