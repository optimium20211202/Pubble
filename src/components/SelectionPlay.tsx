"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { SelectionPost } from "./SelectionPost";
import { PLAY_CONTENTS_NUM } from "@/constants";
import { useRouter } from "next/navigation";
// import queryString from "query-string";
import { getPosAndNegContents } from "@/utils";
import { Content, Post } from "@/types";
import { userIcons } from "@/userIcons";
import { userNames } from "@/userNames";

// 最低でもこの確率で反対意見が出るように調整
const RANDOM_LIMIT = 0.0;

const updateScore = (doLike: boolean, score: number, label: number) => {
  const adj = label == 1 ? 1 : -1;

  const updatedScore = Math.max(
    0.0 + RANDOM_LIMIT,
    Math.min(doLike ? score + 0.1 * adj : score - 0.1 * adj, 1.0 - RANDOM_LIMIT)
  );
  return updatedScore;
};

type Props = {
  topicId: number;
};

export const SelectionPlay = ({ topicId }: Props) => {
  const router = useRouter();
  const displayedContents = useRef<number[]>([]);
  const displayedPosts = useRef<Post[]>([]);
  const [count, setCount] = useState(PLAY_CONTENTS_NUM);
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  const decrementCount = () => setCount((prev) => prev - 1);
  const complete = count < 1;
  const updateDisplayedContents = (displayedContentId: number) => {
    displayedContents.current.push(displayedContentId);
  };
  const updateDisplayedPosts = (displayedPost: Post) => {
    displayedPosts.current.push(displayedPost);
  };

  const [score, setScore] = useState(0.5);

  const [posContents, negContents] = useMemo(
    () => getPosAndNegContents(topicId)!,
    [topicId]
  );

  // TODO: error handling
  if (!posContents || !negContents) {
    throw new Error("contents is null");
  }

  const [content, setContent] = useState<Content>(posContents[0]);

  const handleNextContent = (updatedScore: number) => {
    updateDisplayedContents(content.id);
    updateDisplayedPosts({
      content: content,
      userIcon: userIcons[content.userIconId],
      userName: userNames[content.userNameId],
    } as Post);

    if (content.id === 0) {
      posContents.splice(0, 1);
    }

    const targetLabel = updatedScore < Math.random() ? 0 : 1;
    if (targetLabel === 0) {
      const targetIndex = Math.floor(Math.random() * posContents.length);
      if (targetIndex >= posContents.length) {
        // TODO: error handling
      }
      setContent(posContents[targetIndex]);
      posContents.splice(targetIndex, 1);
    } else {
      const targetIndex = Math.floor(Math.random() * negContents.length);
      if (targetIndex >= negContents.length) {
        // TODO: error handling
      }
      setContent(negContents[targetIndex]);
      negContents.splice(targetIndex, 1);
    }
    decrementCount();
  };

  const onClickLike = () => {
    const updatedScore = updateScore(true, score, content.label);
    setScore(updatedScore);
    handleNextContent(updatedScore);
  };
  const onClickSkip = () => {
    const updatedScore = updateScore(false, score, content.label);
    setScore(updatedScore);
    handleNextContent(updatedScore);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
    // TODO: 完了時の画面遷移の見せ方は工夫した方が良さそう。
    if (complete) {
      // console.log(displayedContents.current);
      // const q = queryString.stringify(
      //   { contents: displayedContents.current },
      //   { arrayFormat: "comma" }
      // );

      localStorage.setItem(
        "displayedContents",
        JSON.stringify(displayedContents.current)
      );

      localStorage.setItem(
        "displayedPosts",
        JSON.stringify(displayedPosts.current)
      );

      localStorage.setItem("preference", score > 0.5 ? "1" : "0");
      // router.push(
      //   `/selection/topics/${topicId}/result1/?${q}&preference=${
      //     score > 0.5 ? 1 : 0
      //   }`
      // );
      router.push(`/selection/topics/${topicId}/result1`);
    }
  }, [complete, router, score, topicId]);

  return (
    <>
      <div className="mr-auto mt-9 font-bold text-xl">
        {language === "EN" ? "👀SNS comment" : "👀SNSコメント"}（{count}）
      </div>
      <div className="mt-6">
        <SelectionPost
          text={
            language === "EN" ? (content.englishText as string) : content?.text
          }
          complete={complete}
          onClickLike={onClickLike}
          onClickSkip={onClickSkip}
          userIcon={userIcons[content.userIconId]}
          userName={
            language === "EN"
              ? userNames[content.userNameId].englishName
              : userNames[content.userNameId].name
          }
          likeCount={content.likeCount}
        />
      </div>
    </>
  );
};
