import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function Result2Page({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-md font-bold text-xl">
        ⚖️ 実際はすごく偏ってた
      </div>
      <div className="mt-md">
        <Explanation
          imagePath="/result/result2.png"
          imageHeight={180}
          imageWidth={270}
          text={
            "一見、さまざまな意見が出てきたように感じますが、じつは多数が片方の意見にかたよっていました。 あなたにとって都合のいい情報ばかりを流してたんです。まずは、タイムラインを振り返ってみましょう。"
          }
        />
      </div>
      <Link className="mt-md" href={`/selection/topics/${topicId}/result3`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          タイムラインを見る
        </button>
      </Link>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result1`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem]">
          戻る
        </button>
      </Link>
    </main>
  );
}
