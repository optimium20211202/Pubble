import React, { useEffect, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TweetData } from "types";

interface TweetProps {
  tweetData: TweetData;
  // hide: boolean; //外部から渡される非表示フラグ
}

const Tweet: React.FC<TweetProps> = ({ tweetData }) => {
  // const tweetRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (tweetRef.current) {
  //     tweetRef.current.style.display = hide ? "none" : "block";
  //   }
  // }, [hide]);

  return (
    <div className="tinderCard w-72 h-72 mb-4">
      <div className="card-body h-full p-6">
        <div className="flex items-center">
          <img
            src={tweetData.profilePicture}
            alt={tweetData.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <h2 className="text-lg font-semibold">{tweetData.name}</h2>
        </div>
        <p className="my-2 text-lg font-bold">{tweetData.content}</p>
        <div className="justify-end card-actions bottom-0">
          <div className="flex items-center">
            <span>
              <AiOutlineHeart />
            </span>
            <span className="ml-2 text-sm">10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
