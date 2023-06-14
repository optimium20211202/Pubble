export interface Author {
  name: string;
  profilePicture: string;
}

export interface TweetData {
  id: string;
  content: string;
  author: Author;
  replies: ReplyData[];
}

export interface ReplyData {
  id: string;
  content: string;
  author: Author;
}
