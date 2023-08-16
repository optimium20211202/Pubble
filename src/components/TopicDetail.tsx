import { getTopic } from "@/utils";
import Image from "next/image";

type Props = {
  topicId: number;
};

export const TopicDetail = ({ topicId }: Props) => {
  const { largeImagePath, title, text } = getTopic(topicId) || {
    largeImagePath: "",
  };
  return (
    <div className="h-[32.25rem] p-xs bg-white flex flex-col rounded-xl">
      <div className="text-sm font-bold">{title}</div>
      <Image
        className="flex-shrink-0 pt-xs"
        src={largeImagePath}
        alt="news image"
        width={342}
        height={192}
      />
      <div className="mt-xs font-bold text-left text-sm text-gray-base leading-6 whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
};
