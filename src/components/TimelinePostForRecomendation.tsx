import { Content } from "@/types";
import clsx from "clsx";
import { UserBadge } from "./UserBadge";
import { userIcons } from "@/userIconsForRecomendation";
import { userNames } from "@/userNamesForRecomendation";

type Props = {
  content: Content;
  userPreference: number;
};

export const TimelinePost = ({ content, userPreference }: Props) => {
  const agree = userPreference === content.label;
  const supplement = "この人がいいねした意見";
  return (
    <div
      className={clsx(
        "flex flex-col p-xs pb-sm bg-white border-3 rounded-xl",
        agree ? "border-red-base" : "border-green-base"
      )}
    >
      <div className="flex justify-between items-center">
        <UserBadge
          userIcon={userIcons[content.id]}
          userName={userNames[content.id]}
        />
        <div
          className={clsx(
            `text-sm font-black`,
            agree ? "text-red-base" : "text-green-base"
          )}
        >
          {supplement}
        </div>
      </div>
      <div className="text-left mt-xs">{content.text}</div>
    </div>
  );
};
