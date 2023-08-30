import { Content } from "@/types";
import clsx from "clsx";
import { UserBadge } from "./UserBadge";
import { userIcons } from "@/userIconsForRecomendation";
import { userNames } from "@/userNamesForRecomendation";

type Props = {
  content: Content;
};

export const TimelinePost = ({ content }: Props) => {
  const supplement = "この人がいいねした意見";
  return (
    <div
      className={clsx(
        "flex flex-col p-xs pb-sm bg-white border-3 rounded-xl border-red-base"
      )}
    >
      <div className="flex justify-between items-center">
        <UserBadge
          userIcon={userIcons[content.id]}
          userName={userNames[content.id]}
        />
        <div className={clsx(`text-sm font-black`, "text-red-base")}>
          {supplement}
        </div>
      </div>
      <div className="text-left mt-xs">{content.text}</div>
    </div>
  );
};
