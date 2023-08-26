"use client"

import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { TimelinePost } from "@/components/TimelinePost";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import { Content } from "@/types";
import { getContents } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  params: {
    topicId: string;
  };
};

export default function Result6Page({ params }: Props) {
  const topicId = Number(params.topicId);

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

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-md font-bold text-xl">
      💬 ディスカッションタイム
      </div>
      <div className="mt-md">
        <Explanation
          imagePath="/result/result6.png"
          imageHeight={240}
          imageWidth={325}
          text="それでは、自分のタイムラインと他の人のタイムラインを比較しながら、ディスカッションをしましょう。"
        />
      </div>
      <div className="mr-auto mt-md font-bold text-xl">
      👀私の傾向：【AIは人を助ける】
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
      <Link href={`/selection/topics/${topicId}/result4`} style={{marginTop:"68px"}}>
        <button className="py-3.5 px-4 text-center text-xl bg-white font-black rounded-full" style={{color:"#888888", boxShadow:"0px 0px 12px 0px rgba(0, 0, 0, 0.12)"}}>
          ディスカッション終了
        </button>
      </Link>
    </main>
  );
}
