"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UserBadge } from "./UserBadge";

// どこで使われてるかよく知らないので一旦オプショナル
type Props = {
  mode?: "selection" | "recommendation";
};

export const UserBadgeWithUserInfo = ({ mode }: Props) => {
  const { userName, userIcon } = useUserInfo();

  return <UserBadge userName={userName} userIcon={userIcon} mode={mode} />;
};
