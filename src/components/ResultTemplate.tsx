import Image from "next/image";
import { Children, ReactNode } from "react";

type Props = {
  onClickNext1?: () => void;
  onClickNext2?: () => void;
  title: string;
  imagePath?: string;
  imageWidth?: number;
  imageHeight?: number;
  message?: string;
  buttonTopText?: string;
  buttonBottomText?: string;
  children?: ReactNode;
};
const ResultTemplate: React.FC<Props> = ({
  onClickNext1 = () => {},
  onClickNext2 = () => {},
  title,
  imagePath,
  imageWidth = 0,
  imageHeight = 0,
  message,
  buttonTopText,
  buttonBottomText,
  children,
}) => {
  return (
    <main className="relative flex flex-col items-center mx-auto w-80 mt-10 p-2">
      <div className="text-xl font-black text-center">{title}</div>

      {imagePath && (
        <div
          className="flex justify-center mt-10"
          style={{
            position: "relative",
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image src={imagePath} fill={true} alt="logo" />
        </div>
      )}
      {children}
      {message && (
        <div className="text-base font-bold mt-4 whitespace-pre-wrap">
          {message}
        </div>
      )}

      <div className="w-full flex flex-col items-center justify-end mt-10 pb-4">
        {buttonTopText && (
          <button
            className="btn btn-white btn-wide rounded-3xl shadow-lg"
            onClick={onClickNext1}
          >
            {buttonTopText}
          </button>
        )}
        {buttonBottomText && (
          <button
            className="btn btn-white btn-wide rounded-3xl shadow-lg mt-4"
            onClick={onClickNext2}
          >
            {buttonBottomText}
          </button>
        )}
      </div>
    </main>
  );
};

export default ResultTemplate;
