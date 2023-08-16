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
      <Image src={imagePath} alt="tutorial image" width={342} height={192} />
      <div className="mt-xs font-bold text-left text-lg text-gray-base leading-6">
        {text}
      </div>
    </div>
  );
};
