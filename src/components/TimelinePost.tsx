import { UserBadgeWithUserInfo } from "./UserBadgWithUserInfo";
import { Content } from "@/types";
import clsx from "clsx";
import { UserBadge } from "./UserBadge";
import { userIcons } from "@/userIcons";
import { userNames } from "@/userNames";

type Props = {
  content: Content;
  userPreference: number;
  userIcon: string;
  useName: string;
};

// TODO: UserBadgeのicon & name
export const TimelinePost = ({
  content,
  userPreference,
  userIcon,
  useName,
}: Props) => {
  const agree = userPreference === content.label;
  const supplement =
    userPreference === content.label
      ? "あなたが好みそうな意見"
      : "あなたの好みに反する意見";
  return (
    <div
      className={clsx(
        "flex flex-col p-xs pb-sm bg-white border-3 rounded-xl",
        agree ? "border-red-base" : "border-green-base"
      )}
    >
      <div className="flex justify-between items-center">
        <UserBadge userIcon={userIcon} userName={useName} />
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
