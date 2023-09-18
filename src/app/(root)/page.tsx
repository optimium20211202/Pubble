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

  const onClickNext = () => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userIcon", userIcon);
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
  }, []);

  return (
    <main className="main-container">
      <PubbleLogo className="mt-sm" width={150} height={60} />
      <div className="mt-md text-gray-base text-xl">
        用途を説明するひとことコピーが入る
      </div>
      <div className="w-full">
        <div className="w-fit mr-auto mt-xl font-bold text-lg">
          🎨️ アイコン選択
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
        <div className="w-fit mt-md font-bold text-lg">🖋 ニックネーム記入</div>
        <input
          className="w-full h-[2.625rem] mt-sm pl-xs rounded-xl shadow-base placeholder:font-bold placeholder:text-base"
          placeholder="好きなネームを入力してね"
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
            決定
          </button>
        </Link>
      </div>
    </main>
  );
}
