"use client";
import React, { useState, useEffect } from "react";
import { UserBadge } from "./UserBadge";
import { HeartIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  text: string;
  complete: boolean;
  onClickLike: () => void;
  onClickSkip: () => void;
  userIcon: string;
  userName: string;
  likeCount: number;
};

export const SelectionPost = ({
  text,
  complete,
  onClickLike,
  onClickSkip,
  userIcon,
  userName,
  likeCount,
}: Props) => {
  const [language, setLanguage] = useState(""); // 言語設定を保存するための状態

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
  }, []);

  return (
    <div className="h-[17.25rem] flex flex-col bg-white rounded-xl p-xs pb-sm ">
      {!complete && <UserBadge userIcon={userIcon} userName={userName} />}
      <div className="text-left mt-xs">{complete ? "" : text}</div>
      <div
        className={`flex items-center space-x-2 px-2 py-1 bg-transparent outline-none ${"text-red-base"}`}
      >
        <HeartIcon className="h-5 w-5 pt-0.5" />
        <span>
          {likeCount} {language === "EN" ? " LIKE" : " いいね"}
        </span>
      </div>
      <div className="flex flex-row justify-center gap-xs mt-auto">
        <button
          className="w-40 h-12 flex items-center justify-center gap-xs bg-white border-red-base border-3 rounded-xl shadow-base text-red-base text-xl font-black active:bg-red-base active:text-white"
          onClick={onClickLike}
          disabled={complete}
        >
          <HeartIcon className="h-5 w-5 pt-0.5" />
          {language === "EN" ? "LIKE" : "いいね"}
        </button>
        <button
          className="w-40 h-12 flex items-center justify-center gap-xs bg-white border-tundora border-3 rounded-xl shadow-base text-tundora text-xl font-blacktext-xl font-black"
          onClick={onClickSkip}
          disabled={complete}
        >
          <XMarkIcon className="h-5 w-5 stroke-[4px] pt-0.5" />
          {language === "EN" ? "SKIP" : "スキップ"}
        </button>
      </div>
    </div>
  );
};
