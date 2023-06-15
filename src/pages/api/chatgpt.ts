import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// systemMessageは複数パターン必要になるかも
const systemMessage = {
  role: "system",
  content: "",
};

const generateMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  // 会話履歴が必要な場合はclientから全ての会話履歴を受け取る
  console.log(req.body.input);

  try {
    const baseCompletion = await openai.createChatCompletion({
      // 0613は最新版。利用者が少なくてreponse早いらしい
      model: "gpt-3.5-turbo-0613",
      messages: [systemMessage, ...req.body.input],
    });

    const message = baseCompletion.data.choices?.[0].message;
    console.log(message);
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default generateMessage;
