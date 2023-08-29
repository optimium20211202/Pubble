"use client";
import { PubbleLogo } from "@/components/PubbleLogo";
import { TimelinePost } from "@/components/TimelinePostForRecomendation";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import { Content } from "@/types";
import { getContentsForRecomendation } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PLAY_GAME_NUM } from "@/constants";

type Props = {
  params: {
    topicId: string;
  };
};
export default function Result3Page({ params }: Props) {
  const topicId = Number(params.topicId);
  // const preference = Number(searchParams.preference);
  const [contents, setContents] = useState<Content[]>();
  const [preference, setPreference] = useState<number>(0);

  useEffect(() => {
    const contentIds = JSON.parse(
      localStorage.getItem("displayedContents") || "[]"
    ) as number[];
    const _preference = localStorage.getItem("preference");
    setPreference(Number(_preference));

    if (!contentIds.length || !_preference) {
      throw new Error("displayedContents or preference is null");
    }

    const _contents = getContentsForRecomendation(0);

    console.log(_contents);
    setContents(_contents);
  }, [preference, topicId]);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo mode="recommendation" />
        <PubbleLogo
          className=""
          isColored
          color="white"
          width={90}
          height={36}
        />
      </div>
      <div
        className="mr-auto mt-md font-bold text-xl 	
text-white"
      >
        👀この人のいいね（{PLAY_GAME_NUM}）
      </div>

      <div className="mt-sm flex flex-col gap-xs">
        {contents?.map((content) => {
          return (
            <TimelinePost
              key={content.id}
              content={content}
              userPreference={preference}
            />
          );
        })}
      </div>
      <Link className="mt-lg" href={`/game/play`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
          次へ
        </button>
      </Link>
      <Link className="mt-sm" href={`/game/news`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem] text-white">
          戻る
        </button>
      </Link>
    </main>
  );
}
