"use client";
import React, { useState, useEffect } from "react";
import { PubbleLogo } from "@/components/PubbleLogo";
import { TopicSummary } from "@/components/TopicSummary";
import { SelectionPlay } from "@/components/SelectionPlay";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  params: {
    topicId: string;
  };
};

export default function SelectionPage({ params }: Props) {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  const topicId = Number(params.topicId);

  // コンポーネントのマウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <PubbleLogo className="" isColored width={90} height={36} />
      </div>
      <div className="mr-auto mt-md font-bold text-xl">
        {language === "EN" ? "📰 Detail" : "📰 概要"}
      </div>
      <div className="mt-sm">
        <TopicSummary topicId={topicId} />
      </div>
      <SelectionPlay topicId={topicId} />
    </main>
  );
}
