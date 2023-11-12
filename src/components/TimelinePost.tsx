"use client";
import { UserBadgeWithUserInfo } from "./UserBadgWithUserInfo";
import { useEffect, useState } from "react";
import { Content } from "@/types";
import clsx from "clsx";
import { UserBadge } from "./UserBadge";
import { HeartIcon } from "@heroicons/react/20/solid";

type Props = {
  content: Content;
  userPreference: number;
  userIcon: string;
  useName: string;
  likeCount: number;
};

// TODO: UserBadgeのicon & name
export const TimelinePost = ({
  content,
  userPreference,
  userIcon,
  useName,
  likeCount,
}: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  const agree = userPreference === content.label;
  const supplement =
    userPreference === content.label
      ? language === "EN"
        ? "A preferred view"
        : "あなたが好みそうな意見"
      : language === "EN"
      ? "An opposing view"
      : "あなたの好みに反する意見";

  return (
    <div
      className={clsx(
        "flex flex-col p-xs pb-sm bg-white border-3 rounded-xl",
        agree ? "border-red-base" : "border-green-base"
      )}
    >
      <div className="flex justify-between items-center">
        <UserBadge userIcon={userIcon} userName={useName} />
        <div
          className={clsx(
            `text-sm font-black`,
            agree ? "text-red-base" : "text-green-base"
          )}
        >
          {supplement}
        </div>
      </div>
      <div className="text-left mt-xs">
        {language === "EN" ? content.englishText : content.text}
      </div>
      <div
        className={`flex items-center space-x-2 px-2 py-1 bg-transparent outline-none ${"text-red-base"}`}
      >
        <HeartIcon className="h-5 w-5 pt-0.5" />
        <span>
          {language === "EN" ? likeCount + " LIKE" : likeCount + " いいね"}
        </span>
      </div>
    </div>
  );
};
