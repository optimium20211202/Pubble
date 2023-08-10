import { UserBadge } from "./UserBadge";
import { HeartIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  text: string;
  complete: boolean;
  onClickLike: () => void;
  onClickSkip: () => void;
  userIcon: string;
  userName: string;
};

export const SelectionPost = ({
  text,
  complete,
  onClickLike,
  onClickSkip,
  userIcon,
  userName,
}: Props) => {
  return (
    <div className="h-64 flex flex-col bg-white rounded-xl p-3 pb-6 ">
      {!complete && <UserBadge userIcon={userIcon} userName={userName} />}
      <div className="text-left mt-2">{complete ? "" : text}</div>
      <div className="flex flex-row justify-center gap-2 mt-auto">
        <button
          className="w-40 h-12 flex items-center justify-center gap-2 bg-white border-red-base border-3 rounded-xl shadow-base text-red-base text-xl font-black"
          onClick={onClickLike}
          disabled={complete}
        >
          <HeartIcon className="h-5 w-5 pt-0.5" />
          いいね
        </button>
        <button
          className="w-40 h-12 flex items-center justify-center gap-2 bg-white border-tundora border-3 rounded-xl shadow-base text-tundora text-xl font-blacktext-xl font-black"
          onClick={onClickSkip}
          disabled={complete}
        >
          <XMarkIcon className="h-5 w-5 stroke-[4px] pt-0.5" />
          スキップ
        </button>
      </div>
    </div>
  );
};
