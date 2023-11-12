import Image from "next/image";

// modeはどこで使われてるかよく知らないので一旦オプショナル
type Props = {
  userName: string;
  userIcon: string;
  mode?: "selection" | "recommendation";
};
export const UserBadge = ({ userName, userIcon, mode }: Props) => {
  return (
    <div className="flex flex-row items-center">
      {userIcon ? (
        <Image
          className="rounded-full"
          src={userIcon}
          alt="user icon"
          width={36}
          height={36}
        />
      ) : (
        <div className="h-[36px] w-[36px] bg-gray-300 rounded-full"></div>
      )}

      <div className={`pl-2 ${mode === "recommendation" ? "text-white" : ""}`}>
        {userName}
      </div>
    </div>
  );
};
