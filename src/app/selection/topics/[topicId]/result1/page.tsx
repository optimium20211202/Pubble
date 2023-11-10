"use client";
import React, { useState, useEffect } from "react";
import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
  // searchParams: {
  //   contents: string;
  //   preference: string;
  // };
};
export default function Result1Page({
  params,
}: // searchParams: { contents, preference },
Props) {
  const topicId = Number(params.topicId);

  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  // コンポーネントのマウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-md font-bold text-xl">
        {language === "EN" ? "🎉 Good job!!!" : "🎉 おつかれさまです！"}
      </div>
      <div className="mt-xl">
        <Explanation
          imagePath="/result/result1.png"
          imageHeight={204}
          imageWidth={254}
          text={
            language === "EN"
              ? `Through various comments, I believe you have touched upon and considered different opinions.\n\n What kind of comments were flowing in other people's timelines?`
              : `いろいろなコメントを通じて、あなたは、さまざまな意見について、ふれて、考えられたと思います。\n\n他の人のタイムラインには、どのようなコメントが流れていたのでしょうか？`
          }
        />
      </div>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result6`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          次へ
        </button>
      </Link>
    </main>
  );
}
