import { useState } from "react";
import Image from "next/image";

const Tutorial: React.FC<{ onClickStart: () => void }> = ({ onClickStart }) => {
  return (
    <dialog className="modal modal-open">
      <form method="dialog" className="modal-box">
        <div className="font-bold text-lg text-center">🦜 準備完了</div>
        <div className="font-bold mt-8">
          準備が完了しました。下記の説明画像を確認して、スタートしましょう！
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            src={`/tutorial.png`}
            width={366}
            height={444}
            alt="tutorial"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="text-center mt-6">
          <button className="roundButton2" onClick={onClickStart}>
            スタート
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Tutorial;
