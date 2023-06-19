import Image from "next/image";
import ResultTemplate from "./ResultTemplate";
import { ResultStep } from "types";

const ResultForth1: React.FC<{
  onClickNext: (nextStep: ResultStep) => void;
}> = ({ onClickNext }) => {
  return (
    <ResultTemplate
      onClickNext1={() => onClickNext(ResultStep.Fifth)}
      onClickNext2={() => onClickNext(ResultStep.Fifth)}
      title="📱  ネットは都合の良いものばかり"
      imagePath="/result/result4_1.png"
      imageWidth={218}
      imageHeight={240}
      message={`よく気づいてくれました！

じつは、ネット上の内容のほとんどが、あなたの都合にあわせて、自動でおすすめされているものです。`}
      buttonTopText="べつに良いじゃん"
      buttonBottomText="それは良くないの？"
    />
  );
};

export default ResultForth1;
