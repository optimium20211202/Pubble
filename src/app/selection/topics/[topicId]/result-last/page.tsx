import { MyTimeline } from "@/components/MyTimeline";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function ResultLastPage({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-9 font-bold text-xl">
        😃 ディスカッションタイム！
      </div>
      <div className="w-full h-[492px] mt-9 bg-white rounded-xl"></div>

      <div className="mt-md">
        <MyTimeline topicId={topicId} showPreference={true} />
      </div>
      <Link className="mt-10" href={`/selection/topics`}>
        <button className="w-60 h-12 bg-white text-center text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          TOPへ戻る
        </button>
      </Link>
    </main>
  );
}
