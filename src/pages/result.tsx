import { Puddle } from "components/Puddle";
import ResultFirst from "components/ResultFirst";
import ResultSecond from "components/ResultSecond";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

enum ResultStep {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
}
export default function Result() {
  const [resultStep, setResultStep] = useState<ResultStep>(ResultStep.First);

  const onClickNext = () => {
    setResultStep(resultStep + 1);
  };
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
      {resultStep == ResultStep.Third && (
        <ResultSecond onClickNext={onClickNext} />
      )}
    </div>
  );
}
