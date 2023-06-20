import { useEffect, useState } from "react";
import Image from "next/image";

const MiniGame: React.FC = () => {
  const [picNo, setPicNo] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => progress + 0.2);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <dialog className="modal modal-open">
      <form method="dialog" className="modal-box">
        <div className="font-bold text-lg text-center">
          🦖 コンテンツ準備中{" "}
          <div className="loading loading-spinner align-middle"></div>
        </div>
        <progress
          className="progress progress-success w-full mt-4"
          value={progress}
          max="100"
        ></progress>
        <div className="font-bold mt-4">
          待っている間にまちがい探し（６つの違い）をしてみましょう！
        </div>
        <div className="flex justify-center items-center mt-4">
          <Image
            src={`/spot_the_difference/std${picNo + 1}.png`}
            width={300}
            height={300}
            alt="game gif"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-xs font-extralight text-center mt-2">
          by{" "}
          <a
            className="link text-blue-600 dark:text-blue-500 hover:underline"
            href="https://xn--fdk3a7ctb5192box5b.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            学習プリント.com
          </a>
        </div>
        <div className="text-center mt-6">
          <button
            className="roundButton1"
            onClick={() => {
              if (picNo === 3) {
                setPicNo(0);
                return;
              }
              setPicNo(picNo + 1);
            }}
          >
            別のまちがい探し
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default MiniGame;
