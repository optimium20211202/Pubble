import React from "react";
import { ReplyData } from "types";

interface ReplyProps {
  replyData: ReplyData;
}

const Reply: React.FC<ReplyProps> = ({ replyData }) => {
  return (
    <div className="rounded bg-gray-100 p-3 my-1 shadow">
      <div className="flex items-center">
        <img
          src={replyData.author.profilePicture}
          alt={replyData.author.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <h2 className="text-sm font-bold">{replyData.author.name}</h2>
      </div>
      <p className="text-sm">{replyData.content}</p>
    </div>
  );
};

export default Reply;
