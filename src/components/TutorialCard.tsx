import { getTopic } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imagePath: string;
  text: string;
};

export const TutorialCard = ({ imagePath, text }: Props) => {
  return (
    <div className="h-[24.75rem] p-xs bg-white flex flex-col rounded-xl">
      <Image
        className="mx-auto "
        src={imagePath}
        alt="tutorial image"
        width={171}
        height={96}
      />
      <div className="mt-xs font-bold text-left text-m text-gray-base leading-6 whitespace-pre-wrap overflow-y-auto">
        {text}
      </div>
    </div>
  );
};
