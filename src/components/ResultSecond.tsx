import Image from "next/image";
import ResultTemplate from "./ResultTemplate";

const ResultFirst: React.FC<{ onClickNext: () => void }> = ({
  onClickNext,
}) => {
  return (
    <ResultTemplate
      onClickNext={onClickNext}
      title="⚖️ 実際はすごく偏ってた"
      imagePath="/result/result2.png"
      imageWidth={270}
      imageHeight={180}
      message={`一見、さまざまな意見が出てきたように感じますが、じつは多数が片方の意見にかたよっていました。

じつは、あなたにとって都合のいい情報ばかりを流してたんです。`}
      buttonTopText="うそだぁ！"
      buttonBottomText="ほ…ほんとに？"
    />
  );
};

export default ResultFirst;
