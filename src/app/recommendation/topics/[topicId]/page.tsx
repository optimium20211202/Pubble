import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    topicId: string;
  };
};
export default function RecommendationTopicPage({
  params,
}: Props) {
  const topicId = Number(params.topicId)

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="" isColored width={150} height={60} />
      <div className="mr-auto mt-md font-bold text-xl">📰 ターゲットがみたニュース</div>
      <div className="mt-sm">
        <div className="h-[32.25rem] p-xs bg-white flex flex-col rounded-xl">
          <div className="text-sm font-bold text-center">【 動物園はあるべきか、それとも廃止するべきか 】</div>
          <Image
            className="flex-shrink-0 pt-xs"
            src="/recommendation_news_image.png"
            alt="news image"
            width={342}
            height={192}
          />
          <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6 whitespace-pre-wrap">
            {`日本は動物園大国ですが、その存在については賛否が分かれています。一部では、檻に閉じ込められた動物たちが可哀想だと感じ、檻に閉じ込められた動物たちが一生を送る辛さを問いかける意見があります。\n\nしかし、子ども時代に動物園で生き物を直接見た感動や、希少動物の保存に貢献するなどの役割を評価する声も多くあります。動物の福祉や市民ニーズとの調和を図りつつ、動物園の新たな形を模索する時代が到来しています。`}
          </div>
        </div>
      </div>
      <Link className="mt-lg" href={`/recommendation/topics/${topicId + 1}`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          この人のいいね一覧
        </button>
      </Link>
    </main>
  )
}
