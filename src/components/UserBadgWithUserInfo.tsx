"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { UserBadge } from "./UserBadge";

export const UserBadgeWithUserInfo = () => {
  const { userName, userIcon } = useUserInfo();

  return <UserBadge userName={userName} userIcon={userIcon} />;
};
