import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { TweetData } from "types";

interface TweetProps {
  tweetData: TweetData;
}

const Tweet: React.FC<TweetProps> = ({ tweetData }) => {
  return (
    <div className="tinderCard bordered w-60 sm:w-80 mx-auto mb-4">
      <div className="card-body">
        <div className="flex items-center">
          <img
            src={tweetData.author.profilePicture}
            alt={tweetData.author.name}
            className="w-12 h-12 rounded-full mr-2"
          />
          <h2 className="card-title">{tweetData.author.name}</h2>
        </div>
        <p className="my-2">{tweetData.content}</p>
        <div className="justify-end card-actions">
          {/* react-iconsのelementをtinder cardのなかでclickするとエラーになる... */}
          <div className="btn btn-sm btn-circle">
            <AiOutlineMessage />
          </div>
          <div className="btn btn-sm btn-circle">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
