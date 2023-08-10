import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function Result5Page({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-9 font-bold text-xl">
        📱 ネットは都合の良いものばかり
      </div>
      <div className="mt-9">
        <Explanation
          imagePath="/result/result4_2.png"
          imageHeight={240}
          imageWidth={216}
          text={
            "同じニュースに対するコメントなのに、表示されてる内容が全然違う。\n\nうんたらこんたらうんたらこんたらうんたらこんたらうんたらこんたらうんたらこんたらうんたらこんたら＠！"
          }
        />
      </div>
      <Link className="mt-10" href={`/selection/topics/${topicId}/result-last`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          わかった！
        </button>
      </Link>
      <Link className="mt-6" href={`/selection/topics/${topicId}/result4`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem]">
          戻る
        </button>
      </Link>
    </main>
  );
}
