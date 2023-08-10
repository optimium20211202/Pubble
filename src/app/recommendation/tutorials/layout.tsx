import { PubbleLogo } from "@/components/PubbleLogo";
import { UserBadgeWithUserInfo } from "@/components/UserBadgWithUserInfo";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <main className="w-96 px-3 pb-16 max-w-full mx-auto text-center flex flex-col items-center justify-start">
      <div className="w-full mt-6 flex flex-row justify-between">
        <UserBadgeWithUserInfo />
      </div>
      <PubbleLogo className="mt-14" isColored width={150} height={60} />
      <div className="mr-auto mt-8 mx-auto font-bold text-xl">
        🎮コメントおすすめゲーム
      </div>
      {children}
    </main>
  );
}
