// export interface Author {
//   name: string;
//   profilePicture: string;
// }

export interface TweetData {
  id: number;
  content: string;
  name: string;
  profilePicture: string;
  approvalFlag: boolean;
  viewed: boolean;
}

export interface GptOutputData {
  Pros: string[];
  Cons: string[];
}

// export interface ReplyData {
//   id: string;
//   content: string;
//   author: Author;
// }

export interface gptMessage {
  role: "system" | "user" | "assistant";
  content: string;
}
