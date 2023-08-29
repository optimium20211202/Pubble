import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    topicId: string;
  };
};
export default function RecommendationTopicPage({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo mode="recommendation" />
      </div>
      <div className="flex justify-center mt-xl">
        <Image
          src="/pubble_logo_white.svg"
          alt="ロゴ"
          width={150}
          height={60}
        />
      </div>
      <div className="mr-auto mt-md font-bold text-xl text-white">
        📰 ターゲットがみたニュース
      </div>
      <div className="mt-sm">
        <div className="h-[32.25rem] p-xs bg-white flex flex-col rounded-xl">
          <div className="text-sm font-bold text-center">
            【 AIは人の仕事を助けるのか、それとも奪うのか 】
          </div>
          <Image
            className="flex-shrink-0 pt-xs"
            src="/news2_image_large.png"
            alt="news image"
            width={342}
            height={192}
          />
          <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6 whitespace-pre-wrap">
            {`「Job総研」の調査により、多くの職業人がAIによる仕事の効率化を認識している一方で、AIによる仕事の奪取を懸念していることが明らかになりました。 \n\n特に若年層ではこの懸念が顕著で、AIの普及による影響が焦点となっています。AIの進化は社会に大きな影響を与えることは間違いありませんが、それが助けになるのか、それとも仕事を奪うのかはこれからの発展次第です。`}
          </div>
        </div>
      </div>
      <Link className="mt-lg" href={`/game/timeline`}>
        <button className="w-60 h-12 bg-blue-base text-center text-white text-xl font-black rounded-4xl shadow-base tracking-[0.05rem] indent-[0.05rem]">
          この人のいいね一覧
        </button>
      </Link>
    </main>
  );
}
