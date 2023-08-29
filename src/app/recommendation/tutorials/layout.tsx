import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo mode="recommendation"/>
      </div>
      <PubbleLogo className="mt-xl" isColored color="white" width={150} height={60} />
      <div className="mr-auto mt-md mx-auto font-bold text-xl text-defaultBg">
        🎮コメントおすすめゲーム
      </div>
      {children}
    </main>
  );
}
