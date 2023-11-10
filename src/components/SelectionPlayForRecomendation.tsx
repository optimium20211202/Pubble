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
  const [count, setCount] = useState(PLAY_RECOMEND_CONTENTS_NUM);
  const decrementCount = () => setCount((prev) => prev - 1);
  const complete = count < 1;
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  console.log("count");

  const [score, setScore] = useState(DEFAULT_SCORE);

  const [contents] = useState(getContentsForGame());

  const [content, setContent] = useState<RecomendContent>(contents[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [userIcon, setUserIcon] = useState(userIcons[0]);

  const [userName, setUserName] = useState(userNames[0]);

  const handleNextContent = () => {
    console.log(contents);
    const targetIndex = currentIndex + 1;
    setContent(contents[targetIndex]);

    setCurrentIndex((currentIndex) => currentIndex + 1);
    decrementCount();
    const dummyUserIndex = Math.floor(Math.random() * 15);
    setUserIcon(userIcons[dummyUserIndex]);
    setUserName(userNames[dummyUserIndex]);
  };

  const onClickLike = () => {
    const updatedScore = updateScore(true, score, content);
    setScore(updatedScore);
    handleNextContent();
    console.log(updatedScore);
  };
  const onClickSkip = () => {
    const updatedScore = updateScore(false, score, content);
    setScore(updatedScore);
    handleNextContent();
    console.log(updatedScore);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
    // TODO: 完了時の画面遷移の見せ方は工夫した方が良さそう。
    if (complete) {
      localStorage.setItem("userScore", score.toString());
      router.push(`/game/result`);
    }
  }, [complete, router, score, topicId]);

  console.log(content);

  return (
    <>
      <div className="mr-auto mt-9 font-bold text-xl text-white">
        {language === "EN" ? "👀Comment candidates" : "👀コメント候補"}（{count}
        ）
      </div>
      <div className="mt-6">
        <SelectionPost
          text={language === "EN" ? content?.englishText : content?.text}
          complete={complete}
          onClickLike={onClickLike}
          onClickSkip={onClickSkip}
          userIcon={userIcon}
          userName={language === "EN" ? userName.englishName : userName.name}
        />
      </div>
    </>
  );
};
