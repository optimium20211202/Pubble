"use client";
import React, { useState, useEffect } from "react";
import { getTopicForRecomendation } from "@/utils";
import Image from "next/image";

type Props = {
  topicId: number;
};

export const TopicSummary = ({ topicId }: Props) => {
  const { largeImagePath, textShort, englishTextShort } =
    getTopicForRecomendation(topicId) || {
      largeImagePath: "",
    };
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);
  return (
    <div className="flex flex-col">
      <Image
        className="flex-shrink-0"
        src={largeImagePath}
        alt="news image"
        width={366}
        height={206}
      />
      <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6 text-white">
        {language === "EN" ? englishTextShort : textShort}
      </div>
    </div>
  );
};
