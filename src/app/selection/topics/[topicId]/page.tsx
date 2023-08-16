import { PubbleLogo } from "@/components/PubbleLogo";
import { TopicDetail } from "@/components/TopicDetail";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import { PLAY_CONTENTS_NUM } from "@/constants";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function TopicDetailPage({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />
      <div className="mr-auto mt-md font-bold text-xl">📰 ニュース</div>
      <div className="mt-sm">
        <TopicDetail topicId={topicId} />
      </div>
      <Link className="mt-lg" href={`/selection/topics/${topicId}/play`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          SNSコメント（{PLAY_CONTENTS_NUM}）
        </button>
      </Link>
    </main>
  );
}
