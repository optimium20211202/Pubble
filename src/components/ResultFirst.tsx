import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";

const ResultFirst: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      onClickNext1={() => onClickNext(ResultStep.Second)}
      onClickNext2={() => onClickNext(ResultStep.Second)}
      title="🎉 おつかれさま"
      imagePath="/result/result1.png"
      imageWidth={254}
      imageHeight={204}
      message={`いろいろなおすすめ投稿を通じて、あなたは、さまざまな意見について、ふれて、考えれたと思います。
      
でも、本当にそうなのでしょうか？`}
      buttonTopText="本当にそうだった！"
      buttonBottomText="どういう意味？"
    />
    /*
    <main className="relative flex flex-col items-center mx-auto w-80 mt-10 p-2">
      <div className="text-xl font-black text-center">🎉 おつかれさま</div>

      <div
        className="flex justify-center mt-10"
        style={{ position: "relative", width: "254px", height: "204px" }}
      >
        <Image src={"/result/result1.png"} fill={true} alt="logo" />
      </div>
      <div className="text-base font-bold mt-4">
        いろいろなおすすめ投稿を通じて、あなたは、さまざまな意見について、ふれて、考えれたと思います。
        <br />
        <br /> でも、本当にそうなのでしょうか？
      </div>

      <div className="w-full flex flex-col items-center justify-end mt-10">
        <button
          className="btn btn-white btn-wide rounded-3xl shadow-lg"
          onClick={onClickNext}
        >
          本当にそうだった！
        </button>
        <button
          className="btn btn-white btn-wide rounded-3xl shadow-lg mt-4"
          onClick={onClickNext}
        >
          どういう意味？
        </button>
      </div>
    </main>
    */
  );
};

export default ResultFirst;
