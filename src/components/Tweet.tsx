import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { TweetData } from "types";

interface TweetProps {
  tweetData: TweetData;
}

const Tweet: React.FC<TweetProps> = ({ tweetData }) => {
  return (
    <div className="tinderCard w-[340px] h-[340px] mb-4">
      <div className="card-body h-full p-6">
        <div className="flex items-center">
          <img
            src={tweetData.author.profilePicture}
            alt={tweetData.author.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <h2 className="text-lg font-semibold">{tweetData.author.name}</h2>
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
