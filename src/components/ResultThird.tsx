import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";

const ResultThird: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      onClickNext1={() => {
        onClickNext(ResultStep.Fourth1);
      }}
      onClickNext2={() => {
        onClickNext(ResultStep.Fourth2);
      }}
      title="📊 データを見てみよう"
      message={`あなたの意見をうかがいながら、こちらで都合のよい情報を投稿していました。`}
      buttonTopText="うそだぁ！"
      buttonBottomText="ほ…ほんとに？"
    >
      <div className="text-base font-bold mt-4 whitespace-pre-wrap">
        ほんとですよ。じっさい、これがあなたにおすすめした内容の割合です。
      </div>
      <div className="card w-80 bg-base-100 shadow-xl mt-4 p-4">
        {/* <div className="card-body"> */}
        <div className="text-base font-bold text-center">
          こちらであなたの好みに反する意見
        </div>
        <div className="text-base font-bold text-center">
          <span className="text-6xl font-[1200] text-[#D45454]">6</span> 投稿
        </div>
        <div className="text-base font-bold mt-8 text-center">
          あなたの好みに寄り添った意見
        </div>
        <div className="text-base font-bold text-center">
          <span className="text-6xl font-[1200] text-[#41B55A]">20</span> 投稿
        </div>
        {/* </div> */}
      </div>
    </ResultTemplate>
  );
};

export default ResultThird;
