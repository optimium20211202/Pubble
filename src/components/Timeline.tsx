import React from "react";
import Tweet from "./Tweet";
import Reply from "./Reply";
import { TweetData } from "types";

interface TimelineProps {
  tweets: TweetData[];
}

const Timeline: React.FC<TimelineProps> = ({ tweets }) => {
  return (
    <section className="w-full md:w-3/5 bg-white p-10">
      {tweets.map((tweet) => (
        <React.Fragment key={tweet.id}>
          <Tweet tweetData={tweet} />
          {tweet.replies.map((reply) => (
            <Reply key={reply.id} replyData={reply} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Timeline;
