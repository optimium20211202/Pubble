import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";
import Link from "next/link";

const ResultFirst: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      // onClickNext1={() => onClickNext(ResultStep.Fifth)}
      title="🏆 よくできました"
      // buttonTopText="トップへ戻る"
    >
      <div className="text-base font-bold mt-8 whitespace-pre-wrap">
        頑張ったあなたに特別なトロフィーをプレゼント！
        <br />
        全部で36種類。ぜひ集めてみてね！
      </div>
      <div
        className="flex justify-center mt-10"
        style={{
          position: "relative",
          width: `366px`,
          height: `360px`,
        }}
      >
        <Image src={"/result/result6.png"} fill={true} alt="prize" />
      </div>
      <div className="w-full flex flex-col items-center justify-end mt-10 pb-4">
        <Link href="/">
          <button className="btn btn-white btn-wide rounded-3xl shadow-lg">
            トップへ戻る
          </button>
        </Link>
      </div>
    </ResultTemplate>
  );
};

export default ResultFirst;
