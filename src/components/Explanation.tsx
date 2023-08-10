import { getTopic } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imagePath: string;
  text: string;
  imageWidth: number;
  imageHeight: number;
};

export const Explanation = ({
  imagePath = "",
  text,
  imageWidth,
  imageHeight,
}: Props) => {
  return (
    <div className="p-3 pb-8 bg-white flex flex-col rounded-xl items-center">
      <Image
        src={imagePath}
        alt="Explanation image"
        width={imageWidth}
        height={imageHeight}
      />
      <div className="mt-3 font-bold text-left text-lg leading-8 whitespace-pre-wrap ">
        {text}
      </div>
    </div>
  );
};
