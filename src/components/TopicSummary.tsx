"use client";
import React, { useState, useEffect } from "react";
import { getTopic } from "@/utils";
import Image from "next/image";

type Props = {
  topicId: number;
};

export const TopicSummary = ({ topicId }: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  const { largeImagePath, textShort, englishTextShort } = getTopic(topicId) || {
    largeImagePath: "",
    englishTextShort: "",
  };

  // コンポーネントのマウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  // 言語設定に基づいて表示するタイトルを決定
  const displayTitle = language === "EN" ? englishTextShort : textShort;

  return (
    <div className="flex flex-col">
      <Image
        className="flex-shrink-0"
        src={largeImagePath}
        alt="news image"
        width={366}
        height={206}
      />
      <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6">
        {displayTitle}
      </div>
    </div>
  );
};
