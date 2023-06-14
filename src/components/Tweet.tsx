import React from "react";
import { TweetData } from "types";

interface TweetProps {
  tweetData: TweetData;
}

const Tweet: React.FC<TweetProps> = ({ tweetData }) => {
  return (
    <div className="rounded bg-white p-4 my-2 shadow md:flex md:items-start md:space-x-4">
      <img
        src={tweetData.author.profilePicture}
        alt={tweetData.author.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="md:flex-1">
        <h2 className="font-bold">{tweetData.author.name}</h2>
        <p>{tweetData.content}</p>
      </div>
    </div>
  );
};

export default Tweet;
