import { Explanation } from "@/components/Explanation";
import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";

type Props = {
  params: {
    topicId: string;
  };
};
export default function Result4Page({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />

      <div className="m-auto mt-md font-bold text-xl">
        📱 ネットは都合の良いものばかり
      </div>
      <div className="mt-md">
        <Explanation
          imagePath="/result/result4_1.png"
          imageHeight={240}
          imageWidth={216}
          text={
            "ほらね。あなたのいいねの割合が多いものばかりですよね。\n\nじつは、あなたの意見をうかがいながら、あなたの都合にあわせて、自動でコメントを表示していました。"
          }
        />
      </div>
      <Link className="mt-md" href={`/selection/topics/${topicId}/result6`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[1rem] indent-[1rem]">
          次へ
        </button>
      </Link>
      <Link className="mt-sm" href={`/selection/topics/${topicId}/result3`}>
        <button className="w-60 h-12 text-center text-xl font-bold tracking-[1rem] indent-[1rem]">
          戻る
        </button>
      </Link>
    </main>
  );
}
