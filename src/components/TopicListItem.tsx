import { getTopic } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  topicId: number;
  linkPath: string;
};

export const TopicListItem = ({ topicId, linkPath }: Props) => {
  const { imagePath, title, unavailable } = getTopic(topicId) || {
    imagePath: "",
    title: "",
  };
  if (unavailable) {
    return (
      <div className="relative p-3 bg-gray-500 flex rounded-xl shadow-base">
        <Image
          className="flex-shrink-0"
          src={imagePath}
          alt="news image"
          width={96}
          height={96}
        />
        <div className="pl-3 font-bold text-left text-sm text-gray-base leading-6">
          {title}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
          <div className="text-xl text-white font-bold">準備中...</div>
        </div>
      </div>
    );
  }
  return (
    <Link href={linkPath} className="p-3 bg-white flex rounded-xl shadow-base">
      <Image
        className="flex-shrink-0"
        src={imagePath}
        alt="news image"
        width={96}
        height={96}
      />
      <div className="pl-3 font-bold text-left text-sm text-gray-base leading-6">
        {title}
      </div>
    </Link>
  );
};
