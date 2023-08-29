import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import { MyTimeline } from "@/components/MyTimeline";

type Props = {
  params: {
    topicId: string;
  };
  // searchParams: {
  //   contents: string;
  //   preference: string;
  // };
};
export default function Result3Page({ params }: Props) {
  const topicId = Number(params.topicId);
  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <PubbleLogo className="" isColored width={90} height={36} />
      </div>
      <div className="mt-md">
        <MyTimeline topicId={topicId} />
      </div>
      <Link className="mt-lg" href={`/selection/topics/${topicId}/result4`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
          次へ
        </button>
      </Link>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result2`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem]">
          戻る
        </button>
      </Link>
    </main>
  );
}
