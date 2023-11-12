"use client";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import { useUserScore } from "@/hooks/useUserScore";

const GameResult = () => {
  const score = useUserScore();
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  return (
    <>
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
      <div className="text-center text-xl text-white mt-md">
        {language === "EN" ? "🔥Final result" : "🔥最終結果"}
      </div>
      <div
        className="flex flex-col p-6 mt-md bg-white rounded-2xl"
        style={{ gap: "22px" }}
      >
        <div className="flex items-center justify-center gap-6">
          <span className="text-xl">
            {" "}
            {language === "EN" ? "Usage Time" : "SNS利用時間"}
          </span>
          <span
            className="font-black"
            style={{ fontSize: "60px", lineHeight: "60px" }}
          >
            +{score}
            {language === "EN" ? "min" : "分"}
          </span>
        </div>
        <ResultDetail score={score} language={language} />
      </div>
      <div
        className="w-full flex flex-col gap-3 items-center"
        style={{ marginTop: "55px" }}
      >
        <Link href="../selection/topics">
          <button
            className="w-60 h-12 bg-white text-center text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]"
            style={{ color: "#888888", letterSpacing: "1px" }}
          >
            {language === "EN" ? "Finish" : "終　了"}
          </button>
        </Link>
      </div>
    </>
  );
};

export default GameResult;

// workshop用の実装なので一応コンポーネントとして切り出さずpagesに持たせておく。
const ResultDetail = ({
  score,
  language,
}: {
  score: number;
  language: string;
}): ReactNode => {
  if (score < 0 || score > 69) {
    console.error("スコア値が異常です");
    return;
  }

  // 0分〜19分の場合
  if (0 < score && score <= 19) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-boring.png"
          alt="image-boring.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">
          {language === "EN"
            ? "Oh, it seems like social media isn't very interesting..."
            : "あら、SNSがつまらないみたい…"}
        </div>
      </div>
    );
  }

  // 20分〜39分の場合
  if (19 < score && score <= 39) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-little-fun.png"
          alt="image-little-fun.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">
          {language === "EN"
            ? "Well, enjoying social media a bit."
            : "まあ、少しSNSを楽しんでる。"}
        </div>
      </div>
    );
  }

  // 40分〜59分の場合
  if (39 < score && score <= 59) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-fun.png"
          alt="image-fun.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">
          {language === "EN"
            ? "Oh, quite hooked on social media."
            : "おー、だいぶSNS にハマってる。"}
        </div>
      </div>
    );
  }

  // 60分〜68分の場合
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src="/game/result/image-verry-fun.png"
        alt="image-verry-fun.png"
        width={258}
        height={258}
      />
      <div className="text-xl font-bold">
        {language === "EN"
          ? "Super absorbed in social media! Awesome!!"
          : "SNSにすごい夢中！やったね！！"}
      </div>
    </div>
  );
};
