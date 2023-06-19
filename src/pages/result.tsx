import { displayedNumsState } from "atoms/DisplayedNumsState";
import { Puddle } from "components/Puddle";
import ResultFifth from "components/ResultFifth";
import ResultFirst from "components/ResultFirst";
import ResultForth1 from "components/ResultForth1";
import ResultForth2 from "components/ResultForth2";
import ResultSecond from "components/ResultSecond";
import ResultSixth from "components/ResultSixth";
import ResultThird from "components/ResultThird";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { ResultStep } from "types";

export default function Result() {
  const displayedNums = useRecoilValue(displayedNumsState);

  const [resultStep, setResultStep] = useState<ResultStep>(ResultStep.First);

  const onClickNext = (nextStep: ResultStep) => {
    setResultStep(nextStep);
  };
  console.log(displayedNums);
  // console.log(resultStep);
  return (
    <div
      className="h-screen"
      style={{ background: "linear-gradient(#DCFBFF, #F7D8FF)" }}
    >
      <Head>
        <title>結果</title>
      </Head>

      <header className="h-14 flex justify-center px-10">
        <Puddle className="" />
      </header>
      {resultStep == ResultStep.First && (
        <ResultFirst onClickNext={onClickNext} />
      )}
      {resultStep == ResultStep.Second && (
        <ResultSecond onClickNext={onClickNext} />
      )}
      {resultStep == ResultStep.Third && (
        <ResultThird
          onClickNext={onClickNext}
          // 多く表示された方をユーザーの傾向としておく。logic的にはそうなるはず。
          displayedNumsCons={Math.min(...displayedNums)}
          displayedNumsPros={Math.max(...displayedNums)}
        />
      )}
      {resultStep == ResultStep.Fourth1 && (
        <ResultForth1 onClickNext={onClickNext} />
      )}
      {resultStep == ResultStep.Fourth2 && (
        <ResultForth2 onClickNext={onClickNext} />
      )}
      {resultStep == ResultStep.Fifth && (
        <ResultFifth onClickNext={onClickNext} />
      )}
      {resultStep == ResultStep.Sixth && (
        <ResultSixth onClickNext={onClickNext} />
      )}
    </div>
  );
}
