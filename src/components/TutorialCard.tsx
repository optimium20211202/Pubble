import { getTopic } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imagePath: string;
  text: string;
};

export const TutorialCard = ({ imagePath, text }: Props) => {
  return (
    <div className="p-3 pb-10 bg-white flex flex-col rounded-xl">
      <Image src={imagePath} alt="tutorial image" width={342} height={192} />
      <div className="mt-3 font-bold text-left text-lg text-gray-base leading-6">
        {text}
      </div>
    </div>
  );
};
