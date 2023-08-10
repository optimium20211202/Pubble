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
    <main className="w-96 max-w-full pt-28 pb-16 mx-auto text-center flex flex-col items-center justify-start">
      <PubbleLogo className="" width={150} height={60} />
      <div className="mt-9 text-gray-base text-xl">
        用途を説明するひとことコピーが入る
      </div>
      <div className="w-full">
        <div className="w-fit mr-auto ml-4 mt-14 font-bold text-lg">
          🎨️ アイコン選択
        </div>
        <div className="grid grid-cols-5 gap-4 place-items-center mx-2 mt-3">
          {userIcons.map((icon, i) => (
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
      <div className="w-full px-4 mt-8">
        <div className="w-fit mr-auto font-bold text-lg">
          🖋 ニックネーム記入
        </div>
        <input
          className="w-full h-10 mt-6 pl-3 rounded-xl shadow-base placeholder:font-bold placeholder:text-base"
          placeholder="好きなネームを入力してね"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="w-full mt-20">
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
