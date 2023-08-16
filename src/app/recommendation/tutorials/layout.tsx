import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <main className="main-container">
      <div className="w-full flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="mt-xl" isColored width={150} height={60} />
      <div className="mr-auto mt-md mx-auto font-bold text-xl">
        🎮コメントおすすめゲーム
      </div>
      {children}
    </main>
  );
}