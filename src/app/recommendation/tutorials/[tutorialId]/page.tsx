import { TutorialCard } from "@/components/TutorialCard";
import { recommendationTutorials } from "@/tutorials";
import Link from "next/link";

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
  const tutorial = recommendationTutorials[tutorialId - 1];

  return (
    <>
      <div className="mt-6">
        <TutorialCard imagePath={tutorial.imagePath} text={tutorial.text} />
      </div>
      <div className="mt-20">
        {tutorialId === 6 ? (
          <Link className="" href={`/recommendation/topics/${topicId}`}>
            <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
              スタート！
            </button>
          </Link>
        ) : (
          <Link
            className=""
            href={`/recommendation/tutorials/${
              tutorialId + 1
            }?topicId=${topicId}`}
          >
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
            <button className="mt-3 w-60 h-12 text-center text-white text-xl font-black tracking-[1rem] indent-[1rem]">
              戻る
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
