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
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-md font-bold text-xl">
        🎉 おつかれさまです！
      </div>
      <div className="mt-xl">
        <Explanation
          imagePath="/result/result1.png"
          imageHeight={204}
          imageWidth={254}
          text={`いろいろなコメントを通じて、あなたは、さまざまな意見について、ふれて、考えれたと思います。\n\nでも、本当にそうなのでしょうか？`}
        />
      </div>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result2`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          どういうこと？
        </button>
      </Link>
    </main>
  );
}
