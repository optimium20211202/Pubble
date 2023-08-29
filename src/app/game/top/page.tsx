import { TutorialCard } from "@/components/TutorialCard";
import { recommendationTutorials } from "@/tutorials";
import Link from "next/link";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  params: {
    tutorialId: string;
  };
  searchParams: {
    topicId?: number;
  };
};
export default function RecommendationTutorial1Page({
  params,
  searchParams: { topicId },
}: Props) {
  const tutorialId = Number(params.tutorialId);
  const tutorial = recommendationTutorials[0];

  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo mode="recommendation" />
      </div>
      <div className="flex justify-center">
        <PubbleLogo
          className="mt-xl"
          isColored
          color="white"
          width={150}
          height={60}
        />
      </div>
      <div className="mr-auto mt-md mx-auto font-bold text-xl text-defaultBg text-center">
        🎮コメントおすすめゲーム
      </div>
      <div className="mt-md">
        <TutorialCard imagePath={tutorial.imagePath} text={tutorial.text} />
      </div>
      <div className="mt-lg text-center">
        {tutorialId === 6 ? (
          <Link className="" href={`/recommendation/topics/${topicId}`}>
            <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
              スタート！
            </button>
          </Link>
        ) : (
          <Link className="" href={`/game/news`}>
            <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
              次へ
            </button>
          </Link>
        )}
        {tutorialId > 1 && (
          <Link
            className=""
            href={`/recommendation/tutorials/${
              tutorialId - 1
            }?topicId=${topicId}`}
          >
            <button className="mt-xs w-60 h-12 text-center text-white text-xl font-black tracking-[1rem] indent-[1rem]">
              戻る
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
