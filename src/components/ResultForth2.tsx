import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";

const ResultForth2: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      onClickNext1={() => onClickNext(ResultStep.Fifth)}
      onClickNext2={() => onClickNext(ResultStep.Fifth)}
      title="📱  ネットは都合の良いものばかり"
      imagePath="/result/result4_2.png"
      imageWidth={216}
      imageHeight={240}
      message={`自分で気づくのはむずかしいですよね。

じつは、ネット上の内容のほとんどが、あなたの好みに合わせて、自動でおすすめされているものです。`}
      buttonTopText="べつに良いじゃん"
      buttonBottomText="それは良くないの？"
    />
  );
};

export default ResultForth2;
