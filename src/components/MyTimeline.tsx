"use client";
import { Content, Post } from "@/types";
import { TimelinePost } from "./TimelinePost";
import { useEffect, useState } from "react";
import { getContents, getTendencyText } from "@/utils";
import { PLAY_CONTENTS_NUM } from "@/constants";
type Props = {
  topicId: number;
  showPreference?: boolean;
};
export const MyTimeline = ({ topicId, showPreference = false }: Props) => {
  const [contents, setContents] = useState<Content[]>();
  const [posts, setPosts] = useState<Post[]>();
  const [preference, setPreference] = useState<number>(0);
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態

  useEffect(() => {
    const contentIds = JSON.parse(
      localStorage.getItem("displayedContents") || "[]"
    ) as number[];

    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);

    const displayedPosts = JSON.parse(
      localStorage.getItem("displayedPosts") || "[]"
    ) as Post[];

    const _preference = localStorage.getItem("preference");
    setPreference(Number(_preference));

    if (!contentIds.length || !_preference) {
      throw new Error("displayedContents or preference is null");
    }

    setPosts(displayedPosts);

    console.log(displayedPosts);
    const _contents = getContents(topicId);
    const filteredContents = _contents
      ?.filter((content) => contentIds.includes(content.id))
      .sort((a, b) => contentIds.indexOf(a.id) - contentIds.indexOf(b.id));
    setContents(filteredContents);
  }, [preference, topicId]);

  return (
    <>
      <div className="text-left font-bold text-xl">
        {showPreference
          ? `${getTendencyText(topicId, preference, language)}`
          : `👀私のタイムライン（${PLAY_CONTENTS_NUM}）`}
      </div>
      <div className="mt-sm flex flex-col gap-xs">
        {posts?.map((post) => {
          return (
            <TimelinePost
              key={post.content.id}
              content={post.content}
              userPreference={preference}
              userIcon={post.userIcon}
              useName={
                language === "EN"
                  ? post.userName.englishName
                  : post.userName.name
              }
              likeCount={post.content.likeCount}
            />
          );
        })}
      </div>
    </>
  );
};
