"use client";
import { PubbleLogo } from "@/components/PubbleLogo";
import { TimelinePost } from "@/components/TimelinePost";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import { Content } from "@/types";
import { getContents } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PLAY_CONTENTS_NUM } from "@/constants";

type Props = {
  params: {
    topicId: string;
  };
  // searchParams: {
  //   contents: string;
  //   preference: string;
  // };
};
export default function Result2Page({ params }: Props) {
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

    const _contents = getContents(topicId);
    const filteredContents = _contents
      ?.filter((content) => contentIds.includes(content.id))
      .sort((a, b) => contentIds.indexOf(a.id) - contentIds.indexOf(b.id));
    setContents(filteredContents);
  }, [preference, topicId]);

  // const contents = useMemo(() => {
  //   const contentIds = searchParams.contents.split(",");
  //   const _contents = getContents(topicId);
  //   return _contents
  //     ?.filter((content) => contentIds.includes(String(content.id)))
  //     .sort(
  //       (a, b) =>
  //         contentIds.indexOf(String(a.id)) - contentIds.indexOf(String(b.id))
  //     );
  // }, [searchParams.contents, topicId]);

  // if (!contents) {
  //   // TODO: error handling
  //   throw new Error("contents is null");
  // }

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <PubbleLogo className="" isColored width={90} height={36} />
      </div>
      <div className="mr-auto mt-md font-bold text-xl">
        👀SNSコメント（{PLAY_CONTENTS_NUM}）
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
      <Link className="mt-lg" href={`/selection/topics/${topicId}/result3`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
          次へ
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
