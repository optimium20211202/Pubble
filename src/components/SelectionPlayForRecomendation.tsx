"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { SelectionPost } from "./SelectionPosForRecomendation";
import { PLAY_RECOMEND_CONTENTS_NUM } from "@/constants";
import { useRouter } from "next/navigation";
// import queryString from "query-string";
import { getContentsForGame } from "@/utils";
import { RecomendContent } from "@/types";
import { userIcons } from "@/userIcons";
import { userNames } from "@/userNames";

// 初期点数
const DEFAULT_SCORE = 36;

const updateScore = (
  doLike: boolean,
  score: number,
  recomendContent: RecomendContent
) => {
  let updatedScore = 0;
  if (doLike) {
    updatedScore = score + recomendContent.score;
  } else {
    updatedScore = score + recomendContent.skipScore;
  }

  return updatedScore;
};

type Props = {
  topicId: number;
};

export const SelectionPlay = ({ topicId }: Props) => {
  const router = useRouter();
  const displayedContents = useRef<number[]>([]);
  const [count, setCount] = useState(PLAY_RECOMEND_CONTENTS_NUM);
  const decrementCount = () => setCount((prev) => prev - 1);
  const complete = count < 1;
  const updateDisplayedContents = (displayedContentId: number) => {
    displayedContents.current.push(displayedContentId);
  };

  const [score, setScore] = useState(DEFAULT_SCORE);

  const contents = getContentsForGame();

  const [content, setContent] = useState<RecomendContent>(contents[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [userIcon, setUserIcon] = useState(userIcons[0]);
  const [userName, setUserName] = useState(userNames[0]);

  const handleNextContent = (updatedScore: number) => {
    updateDisplayedContents(content.id);
    setContent(contents[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
    decrementCount();
    const dummyUserIndex = Math.floor(Math.random() * 15);
    setUserIcon(userIcons[dummyUserIndex]);
    setUserName(userNames[dummyUserIndex]);
  };

  const onClickLike = () => {
    const updatedScore = updateScore(true, score, content);
    setScore(updatedScore);
    console.log(updatedScore);
    handleNextContent(updatedScore);
  };
  const onClickSkip = () => {
    const updatedScore = updateScore(false, score, content);
    setScore(updatedScore);
    console.log(updatedScore);
    handleNextContent(updatedScore);
  };

  useEffect(() => {
    // TODO: 完了時の画面遷移の見せ方は工夫した方が良さそう。
    if (complete) {
      localStorage.setItem("userScore", score.toString());
      router.push(`/game/result`);
    }
  }, [complete, router, score, topicId]);

  return (
    <>
      <div className="mr-auto mt-9 font-bold text-xl text-white">
        👀コメント候補（{count}）
      </div>
      <div className="mt-6">
        <SelectionPost
          text={content?.text}
          complete={complete}
          onClickLike={onClickLike}
          onClickSkip={onClickSkip}
          userIcon={userIcon}
          userName={userName}
        />
      </div>
    </>
  );
};
