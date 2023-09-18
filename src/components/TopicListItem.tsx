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
  // TODO: 利用できないコンテンツの表示どうするか確認
  if (unavailable) {
    return (
      <div className="p-xs bg-white flex rounded-xl shadow-base">
        <Image
          className="flex-shrink-0"
          src={imagePath}
          alt="news image"
          width={96}
          height={96}
        />
        <div className="pl-xs font-bold text-left text-sm text-gray-base leading-6">
          {title}
        </div>
      </div>
    );
  }
  return (
    <Link href={linkPath} className="p-xs bg-white flex rounded-xl shadow-base">
      <Image
        className="flex-shrink-0"
        src={imagePath}
        alt="news image"
        width={96}
        height={96}
      />
      <div className="pl-xs font-bold text-left text-sm text-gray-base leading-6">
        {title}
      </div>
    </Link>
  );
};
