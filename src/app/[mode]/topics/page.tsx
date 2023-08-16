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
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
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

      <PubbleLogo className="mt-xl" isColored width={150} height={60} />
      <div className="mt-lg w-full flex flex-col gap-xs">
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
