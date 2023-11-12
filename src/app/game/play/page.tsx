"use client";
import React, { useState, useEffect } from "react";
import { PubbleLogo } from "@/components/PubbleLogo";
import { TopicSummary } from "@/components/TopicSummaryForRecomendation";
import { SelectionPlay } from "@/components/SelectionPlayForRecomendation";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  params: {
    topicId: string;
  };
};

export default function SelectionPage({ params }: Props) {
  const topicId = Number(params.topicId);
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo mode="recommendation" />
        <PubbleLogo
          className=""
          isColored
          color="white"
          width={90}
          height={36}
        />
      </div>
      <div className="mr-auto mt-md font-bold text-xl text-white">
        {language === "EN" ? "📰 Detail" : "📰 概要"}
      </div>
      <div className="mt-sm">
        <TopicSummary topicId={0} />
      </div>
      <SelectionPlay topicId={0} />
    </main>
  );
}
