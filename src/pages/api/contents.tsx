import type { NextApiRequest, NextApiResponse } from "next";
import { TweetData } from "types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // 会話履歴が必要な場合はclientから全ての会話履歴を受け取る
  try {
    console.log(req.body.input);
    const contents: TweetData[] = [
      {
        id: "1",
        content: "Hello, this is a tweet!",
        author: {
          name: "ブタさん",
          profilePicture:
            "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        },
      },
      {
        id: "2",
        content: "はむはむはむ！",
        author: {
          name: "ハムスター",
          profilePicture:
            "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        },
      },
    ];

    res.status(200).json(contents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
