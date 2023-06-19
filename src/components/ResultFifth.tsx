import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";

const ResultFirst: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      onClickNext1={() => onClickNext(ResultStep.Sixth)}
      title="🎓  これから大人になるあなたへ"
      buttonTopText="わかった"
    >
      <div className="card w-80 bg-base-100 shadow-xl mt-4 p-4">
        <div className="text-base font-bold">
          世界はひろく、たくさんの人がいて、みんな違う考えを持っています。
          <br />
          <br />
          でも自分自分に都合のいい話だけを集めていると、片方だけの考え方をしてしまうことがあります。
          <br />
          <br />
          だから、ネットやSNSを使う時は、「自分に都合のいい話ばかりを聞いていない？」とちょっと立ち止まって考えてみてください。
          <br />
          <br />
          そうすると、いろんな意見を知ることができて、自分の考えも広がっていきますよ。
        </div>
      </div>
    </ResultTemplate>
  );
};

export default ResultFirst;
