import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { TweetData } from "types";

interface TweetProps {
  tweetData: TweetData;
}

const Tweet: React.FC<TweetProps> = ({ tweetData }) => {
  return (
    <div className="card bordered w-full mx-auto mb-4">
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
          <button className="btn btn-sm btn-circle">
            <AiOutlineMessage />
          </button>
          <button className="btn btn-sm btn-circle">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
