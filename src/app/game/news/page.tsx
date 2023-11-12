"use client";
import React, { useState, useEffect } from "react";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import { getTopic } from "@/utils";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    topicId: string;
  };
};
export default function RecommendationTopicPage({ params }: Props) {
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
      </div>
      <div className="flex justify-center mt-xl">
        <Image
          src="/pubble_logo_white.svg"
          alt="ロゴ"
          width={150}
          height={60}
        />
      </div>
      <div className="mr-auto mt-md font-bold text-xl text-white">
        {language === "EN"
          ? "📰The news viewed by the target"
          : " 📰 ターゲットがみたニュース"}
      </div>
      <div className="mt-sm">
        <div className="h-[32.25rem] p-xs bg-white flex flex-col rounded-xl">
          <div className="text-sm font-bold text-center">
            {language === "EN"
              ? "【 Should We Allow AI to Do Homework or Not?  】"
              : "【 AIに宿題をさせるべきか、させてはいけないのか 】"}
          </div>
          <Image
            className="flex-shrink-0 pt-xs"
            src="/news4_image.png"
            alt="news image"
            width={342}
            height={192}
          />
          <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6 whitespace-pre-wrap">
            {language === "EN"
              ? `According to a survey conducted by a certain company, one in three elementary, middle, and high school students used AI for their summer homework. The top subjects where AI was utilized were "essay writing" and "math."\n\nCurrently, there are few restrictions from schools or parents regarding the use of AI. Given this situation, it feels like we should consider whether we should allow AI to do homework or not in the future.`
              : `夏休みの宿題にAIを使っている学生が増えているようだ。とある会社がじっしした調査によると、夏休みの宿題にAIを使用した小中高生は3人に1人。\n\n宿題に使った内容としては「作文」「数学」が上位にきていた。現在AIの使用にたいして、学校や親からの制限はまだ少ない。この状況を受け、AIに宿題をさせるべきか、それともさせてはいけないのか、今後考えていくべきと感じられる。`}
          </div>
        </div>
      </div>
      <Link className="mt-lg" href={`/game/timeline`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-m font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          {language === "EN"
            ? "The viewer's list of likes"
            : "この人のいいね一覧"}
        </button>
      </Link>
    </main>
  );
}
