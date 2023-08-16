import { PubbleLogo } from "@/components/PubbleLogo";
// import { TimelinePost } from "@/components/TimelinePost";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function Result4Page({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <PubbleLogo className="" isColored width={90} height={36} />
      </div>
      <div className="mr-auto mt-md font-bold text-xl">👀SNSコメント（42）</div>

      <div className="mt-sm flex flex-col gap-xs">
        <div className="text-bold text-xl text-red-base">
          TODO: 固定のTimeline表示する
        </div>
      </div>
      <Link className="mt-md" href={`/selection/topics/${topicId}/result5`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
          次へ
        </button>
      </Link>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result3`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem]">
          戻る
        </button>
      </Link>
    </main>
  );
}
