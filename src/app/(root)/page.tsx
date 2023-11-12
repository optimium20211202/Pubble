"use client";
import { PubbleLogo } from "@/components/PubbleLogo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { userIcons } from "@/userIcons";

export default function TopPage() {
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [language, setLanguage] = useState("JP");

  const onClickNext = () => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userIcon", userIcon);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "JP" ? "EN" : "JP";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // 言語設定をlocalStorageに保存
  };

  const topUserIcons = userIcons.slice(0, 15);

  const onClickIcon = (iconPath: string) => {
    setUserIcon(iconPath);
  };

  useEffect(() => {
    const _userName = localStorage.getItem("userName") || "";
    setUserName(_userName);
    const _userIcon = localStorage.getItem("userIcon") || "";
    setUserIcon(_userIcon);
    const _storedLanguage = localStorage.getItem("language") || "JP";
    setLanguage(_storedLanguage);
  }, []);

  return (
    <main className="main-container">
      <div className="w-full">
        <button className="w-fit mr-auto" onClick={toggleLanguage}>
          JP/EN
        </button>
      </div>
      <PubbleLogo className="" width={150} height={60} />

      <div className="w-full">
        <div className="w-fit mr-auto mt-xl font-bold text-lg">
          {language === "JP" ? "🎨️ アイコン選択" : "🎨️ Choose your icon"}
        </div>
        <div className="grid grid-cols-5 gap-4 place-items-center mt-sm">
          {topUserIcons.map((icon, i) => (
            <Image
              key={i}
              className={clsx(
                "rounded-full cursor-pointer",
                userIcon === icon && "ring-4 ring-blue-base"
              )}
              src={icon}
              alt="user icon"
              width={60}
              height={60}
              onClick={() => {
                onClickIcon(icon);
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-fit mt-md font-bold text-lg">
          {language === "JP" ? "🖋 ニックネーム記入" : "🖋 Enter Nickname"}
        </div>
        <input
          className="w-full h-[2.625rem] mt-sm pl-xs rounded-xl shadow-base placeholder:font-bold placeholder:text-base"
          placeholder={
            language === "JP"
              ? "好きなネームを入力してね"
              : "Please enter a nickname"
          }
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="w-full mt-md text-center">
        <Link href="/selection/topics">
          <button
            className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onClickNext}
            disabled={!userName || !userIcon}
          >
            {language === "JP" ? "決定" : "Confirm"}
          </button>
        </Link>
      </div>
    </main>
  );
}
