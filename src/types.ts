// export interface Author {
//   name: string;
//   profilePicture: string;
// }

type LabelType = 0 | 1;

export interface TweetData {
  id: string;
  content: string;
  name: string;
  profilePicture: string;
  label: LabelType;
}

export type Contents = [TweetData[], TweetData[]];

// export interface ReplyData {
//   id: string;
//   content: string;
//   author: Author;
// }

export interface gptMessage {
  role: "system" | "user" | "assistant";
  content: string;
}
