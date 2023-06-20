import { useState } from "react";
import Image from "next/image";
// import ReactFreezeframe from "react-freezeframe";
// import { Freeze } from "freezeframe/types";
// import dynamic from "next/dynamic";

// // ssrだと機能しないので
// const ReactFreezeframe = dynamic(() => import("react-freezeframe"), {
//   ssr: false,
// }) as any;

const gifgameTexts = [
  "赤ちゃんを上手に起こしてあげよう！",
  "赤ちゃんを上手に起こしてあげよう！",
  "赤ちゃんを上手に起こしてあげよう！",
  "赤ちゃんを上手に起こしてあげよう！",
  "赤ちゃんを上手に起こしてあげよう！",
  "赤ちゃんを上手に起こしてあげよう！",
];

const MiniGame: React.FC = () => {
  const [gifgameNo, setGifgameNo] = useState(0);

  return (
    <dialog className="modal modal-open">
      <form method="dialog" className="modal-box">
        <div className="font-bold text-lg text-center">
          🦖 コンテンツ準備中{" "}
          <div className="loading loading-spinner align-middle"></div>
        </div>
        <div className="font-bold mt-8">
          {gifgameTexts[gifgameNo]}タップでストップ！
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            src={`/gamegif/${gifgameNo + 1}.gif`}
            width={300}
            height={300}
            alt="game gif"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="text-center mt-6">
          <button
            className="roundButton1"
            onClick={() => {
              if (gifgameNo === 5) {
                setGifgameNo(0);
                return;
              }
              setGifgameNo(gifgameNo + 1);
            }}
          >
            別のゲーム
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default MiniGame;
