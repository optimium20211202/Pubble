import Image from "next/image";

type Props = {
  onClickNext: () => void;
  title: string;
  imagePath: string;
  message: string;
  buttonTopText: string;
  buttonBottomText: string;
};
const ResultTemplate: React.FC<Props> = ({
  onClickNext,
  title,
  imagePath,
  message,
  buttonTopText,
  buttonBottomText,
}) => {
  return (
    <main className="relative flex flex-col items-center mx-auto w-80 mt-10 p-2">
      <div className="text-xl font-black text-center">{title}</div>

      <div
        className="flex justify-center mt-10"
        style={{ position: "relative", width: "254px", height: "204px" }}
      >
        <Image src={imagePath} fill={true} alt="logo" />
      </div>
      <div className="text-base font-bold mt-4 whitespace-pre-wrap">
        {message}
      </div>

      <div className="w-full flex flex-col items-center justify-end mt-10">
        <button
          className="btn btn-white btn-wide rounded-3xl shadow-lg"
          onClick={onClickNext}
        >
          {buttonTopText}
        </button>
        <button
          className="btn btn-white btn-wide rounded-3xl shadow-lg mt-4"
          onClick={onClickNext}
        >
          {buttonBottomText}
        </button>
      </div>
    </main>
  );
};

export default ResultTemplate;
