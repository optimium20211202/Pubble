import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

const GameRule2 = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <Link href={`/selection/topics`}>
          <Image
            src="/game/mode_switch.svg"
            alt="mode switch"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="flex justify-center mt-xl">
        <Image
          src="/pubble_logo_white.svg"
          alt="ロゴ"
          width={150}
          height={60}
        />
      </div>
      <div className="text-center text-xl text-white mt-md">🎮ルール２</div>
      <div
        className="px-3 pt-3 mt-md bg-white rounded-2xl"
        style={{ paddingBottom: "52px" }}
      >
        <div
          className="flex flex-col justify-items-center items-center gap-6"
          style={{ padding: "42px", backgroundColor: "#F0F0F0"}}
        >
          <button
            className="flex items-center justify-center gap-1 bg-white border-red-base border-3 rounded-xl shadow-base text-red-base text-xl font-black"
            disabled={true}
            style={{width:"168px", height:"42px"}}
          >
            <HeartIcon width="28px" height="26px" />
            おすすめする
          </button>
          <button
            className="flex items-center justify-center gap-1 bg-white border-tundora border-3 rounded-xl shadow-base text-tundora text-xl font-blacktext-xl font-black"
            disabled={true}
            style={{width:"168px", height:"42px"}}
          >
            <XMarkIcon width="28px" height="28px" className="stroke-[4px]"/>
            すすめない
          </button>
        </div>
        <div className="mt-3">
          <p className=" text-lg">
            2.
            コメントが一個ずつ表示されるので、推測をもとに「おすすめする」か「すすめない」かを選択してください。
          </p>
          <p className=" text-lg">例題を準備したので、見てみてください。</p>
        </div>
      </div>
      <div
        className="w-full flex flex-col gap-3 items-center"
        style={{ marginTop: "55px" }}
      >
        <Link href="/game/rule3">
          <button
            className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]"
            style={{ letterSpacing: "1px" }}
          >
            例題へ
          </button>
        </Link>
        <Link href="/game/rule1">
          <button
            className="w-60 h-12 text-center text-white text-xl font-bold tracking-[1rem] indent-[1rem]"
            style={{ letterSpacing: "1px" }}
          >
            戻　る
          </button>
        </Link>
      </div>
    </>
  );
};

export default GameRule2;
