// export interface Author {
//   name: string;
//   profilePicture: string;
// }

export interface TweetData {
  id: string;
  content: string;
  name: string;
  profilePicture: string;
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
