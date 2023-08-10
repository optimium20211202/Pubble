import { PubbleLogo } from "@/components/PubbleLogo";
import { TopicSummary } from "@/components/TopicSummary";
import { SelectionPlay } from "@/components/SelectionPlay";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  params: {
    topicId: string;
  };
};

export default function SelectionPage({ params }: Props) {
  const topicId = Number(params.topicId);

  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <PubbleLogo className="" isColored width={90} height={36} />
      </div>
      <div className="mr-auto mt-9 font-bold text-xl">📰 概要</div>
      <div className="mt-6">
        <TopicSummary topicId={topicId} />
      </div>
      <SelectionPlay topicId={topicId} />
    </main>
  );
}
