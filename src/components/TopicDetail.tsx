"use client";
import React, { useState, useEffect } from "react";
import { getTopic } from "@/utils";
import Image from "next/image";

type Props = {
  topicId: number;
};

export const TopicDetail = ({ topicId }: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  const { largeImagePath, title, englishTitle, text, englishText } = getTopic(
    topicId
  ) || {
    largeImagePath: "",
    title: "",
    englishTitle: "",
    text: "",
    englishText: "",
  };

  // コンポーネントのマウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  // 言語設定に基づいて表示するタイトルとテキストを決定
  const displayTitle = language === "EN" ? englishTitle : title;
  const displayText = language === "EN" ? englishText : text;

  return (
    <div className="h-[32.25rem] p-xs bg-white flex flex-col rounded-xl">
      <div className="text-sm font-bold">{displayTitle}</div>
      <Image
        className="flex-shrink-0 pt-xs"
        src={largeImagePath}
        alt="news image"
        width={342}
        height={192}
      />
      <div
        className="mt-xs font-bold text-left text-sm text-gray-base leading-6 whitespace-pre-wrap overflow-y-auto"
        style={{ maxHeight: "230px" }}
      >
        {displayText}
      </div>
    </div>
  );
};
