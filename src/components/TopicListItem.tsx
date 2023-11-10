"use client";
import React, { useState, useEffect } from "react";
import { getTopic } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  topicId: number;
  linkPath: string;
};

export const TopicListItem = ({ topicId, linkPath }: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  const { imagePath, title, englishTitle, unavailable } = getTopic(topicId) || {
    imagePath: "",
    title: "",
    englishTitle: "",
  };

  // コンポーネントのマウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  if (unavailable) {
    // 利用できないコンテンツの表示処理
    return (
      <div className="p-xs bg-white flex rounded-xl shadow-base relative">
        <Image
          className="flex-shrink-0"
          src={imagePath}
          alt="news image"
          width={96}
          height={96}
        />
        <div className="pl-xs font-bold text-left text-sm text-gray-base leading-6">
          {title}
        </div>
        <div className="overlay rounded-xl">
          {language === "EN" ? "Coming Soon..." : "準備中..."}
        </div>
      </div>
    );
  }

  // 言語設定に基づいて表示するタイトルを決定
  const displayTitle = language === "EN" ? englishTitle : title;

  return (
    <Link href={linkPath} className="p-xs bg-white flex rounded-xl shadow-base">
      <Image
        className="flex-shrink-0"
        src={imagePath}
        alt="news image"
        width={96}
        height={96}
      />
      <div className="pl-xs font-bold text-left text-sm text-gray-base leading-6">
        {displayTitle}
      </div>
    </Link>
  );
};
