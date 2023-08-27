import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const GameResult = () => {
  // TODO: localstorageからスコア（SNS利用時間）を取得する処理の実装
  const score = 70;

  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <div className="flex justify-center mt-xl">
        <Image
          src="/pubble_logo_white.svg"
          alt="ロゴ"
          width={150}
          height={60}
        />
      </div>
      <div className="text-center text-xl text-white mt-md">🔥最終結果</div>
      <div
        className="flex flex-col p-6 mt-md bg-white rounded-2xl"
        style={{ gap: "22px" }}
      >
        <div className="flex items-center justify-center gap-6">
          <span className="text-xl">SNS利用時間</span>
          <span
            className="font-black"
            style={{ fontSize: "60px", lineHeight: "60px" }}
          >
            +{score}分
          </span>
        </div>
        <ResultDetail score={score} />
      </div>
      <div
        className="w-full flex flex-col gap-3 items-center"
        style={{ marginTop: "55px" }}
      >
        <Link href="/game/top">
          <button
            className="w-60 h-12 bg-white text-center text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]"
            style={{ color:"#888888", letterSpacing: "1px" }}
          >
            終　了
          </button>
        </Link>
      </div>
    </>
  );
};

export default GameResult;

// workshop用の実装なので一応コンポーネントとして切り出さずpagesに持たせておく。
const ResultDetail = ({ score }: { score: number }): ReactNode => {
  if (score < 0 || score > 80) {
    console.error("スコア値が異常です");
    return;
  }

  // 0分〜20分の場合
  if (score <= 20) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-boring.png"
          alt="image-boring.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">あら、SNSがつまらないみたい…</div>
      </div>
    );
  }

  // 21分〜40分の場合
  if (score <= 40) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-little-fun.png"
          alt="image-little-fun.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">まあ、少しSNSを楽しんでる。</div>
      </div>
    );
  }

  // 41分〜60分の場合
  if (score <= 60) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/game/result/image-fun.png"
          alt="image-fun.png"
          width={258}
          height={258}
        />
        <div className="text-xl font-bold">おー、だいぶSNS にハマってる。</div>
      </div>
    );
  }

  // 61分〜80分の場合
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src="/game/result/image-verry-fun.png"
        alt="image-verry-fun.png"
        width={258}
        height={258}
      />
      <div className="text-xl font-bold">SNSにすごい夢中！やったね！！</div>
    </div>
  );
};
