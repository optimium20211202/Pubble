import { TopicListItem } from "@/components/TopicListItem";
import { PubbleLogo } from "@/components/PubbleLogo";
import Image from "next/image";
import { getTopicIds } from "@/utils";
import Link from "next/link";
import { MODE } from "@/types";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  params: {
    mode: string;
  };
};

export default function TopicsPage({ params: { mode } }: Props) {
  const topicIds = getTopicIds();

  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
        <Link
          href={`/${
            mode === MODE.SELECTION ? MODE.RECOMMENDATION : MODE.SELECTION
          }/topics`}
        >
          <Image
            src="/mode_switch.svg"
            alt="mode switch"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <PubbleLogo className="mt-10" isColored width={150} height={60} />
      <div className="mt-12 w-full flex flex-col gap-3">
        {topicIds.map((topicId) => (
          <TopicListItem
            key={topicId}
            topicId={topicId}
            linkPath={
              mode === MODE.RECOMMENDATION
                ? `/${mode}//tutorials/1?topicId=${topicId}`
                : `/${mode}/topics/${topicId}`
            }
          />
        ))}
      </div>
    </main>
  );
}
