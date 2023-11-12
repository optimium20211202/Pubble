"use client";
import { useEffect, useState } from "react";
import { Content } from "@/types";
import clsx from "clsx";
import { UserBadge } from "./UserBadge";
import { userIcons } from "@/userIconsForRecomendation";
import { userNames } from "@/userNamesForRecomendation";

type Props = {
  content: Content;
};

export const TimelinePost = ({ content }: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);
  const supplement =
    language === "EN"
      ? "The opinions the viewer liked"
      : "この人がいいねした意見";
  return (
    <div
      className={clsx(
        "flex flex-col p-xs pb-sm bg-white border-3 rounded-xl border-red-base"
      )}
    >
      <div className="flex justify-between items-center">
        <UserBadge
          userIcon={userIcons[content.id]}
          userName={
            language === "EN"
              ? userNames[content.id].englishName
              : userNames[content.id].name
          }
        />
        <div className={clsx(`text-sm font-black`, "text-red-base")}>
          {supplement}
        </div>
      </div>
      <div className="text-left mt-xs">
        {language === "EN" ? content.englishText : content.text}
      </div>
    </div>
  );
};
