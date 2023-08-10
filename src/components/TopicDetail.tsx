import { getTopic } from "@/utils";
import Image from "next/image";

type Props = {
  topicId: number;
};

export const TopicDetail = ({ topicId }: Props) => {
  const { largeImagePath, text } = getTopic(topicId) || {
    largeImagePath: "",
  };
  return (
    <div className="p-3 pb-10 bg-white flex flex-col rounded-xl">
      <Image
        className="flex-shrink-0"
        src={largeImagePath}
        alt="news image"
        width={342}
        height={192}
      />
      <div className="mt-3 font-bold text-left text-sm text-gray-base leading-6">
        {text}
      </div>
    </div>
  );
};
