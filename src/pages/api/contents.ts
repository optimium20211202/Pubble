import type { NextApiRequest, NextApiResponse } from "next";
import { TweetData, GptOutputData } from "types";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.input);

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  // systemMessageは複数パターン必要になるかも
  const systemMessage: ChatCompletionRequestMessage = {
    role: "user",
    content:
      "以下の「タイムマシンがあったら、未来に行くべき」に関して、賛成派と反対派に分かれてディベートするというロールプレイを行います。 このディベートはTwitterのコメント欄で行われます。「タイムマシンがあったら、未来に行くべき」に賛成する理由を20個、「タイムマシンがあったら、未来に行くべき」 に反対する理由を20個出力してください。出力は、Twitterのコメント文形式でお願いします。出力は以下の出力フォーマット に従ってください。小学6年生が理解できる文章で書いてください。出力フォーマット・20個の賛成理由を、Prosというキーを持つ配列に格納してください・20個の反対理由を、Consというキーを持つ配列に格納してください・上記の二つのString型の配列を、合わせてJSONで出力してください", // TODO:プロンプト入れる
  };

  const generateMessage = async (req: NextApiRequest, res: NextApiResponse) => {
    // 会話履歴が必要な場合はclientから全ての会話履歴を受け取る
    // console.log(req.body.input);

    // console.log(systemMessage);

    try {
      const baseCompletion = await openai.createChatCompletion({
        // 0613は最新版。利用者が少なくてreponse早いらしい
        model: "gpt-3.5-turbo-0613", // TODO:16kにしてみたり
        messages: [systemMessage],
        temperature: 0,
      });

      console.log(baseCompletion.data.choices?.[0].message);
      const message: GptOutputData = JSON.parse(
        baseCompletion.data.choices?.[0].message?.content
          ? baseCompletion.data.choices?.[0].message?.content
          : ""
      );

      console.log(message);

      const contents: TweetData[] = convertContents(message.Cons, message.Pros);

      res.status(200).json(contents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  await generateMessage(req, res);
};

function convertContents(
  ConsContents: string[],
  ProsContents: string[]
): TweetData[] {
  let ConsResult: TweetData[] = [];
  let ProsResult: TweetData[] = [];
  let index: number = 0;
  const userIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  const userNames = [
    "さくらもち",
    "yume",
    "ブラックコート",
    "こむぎ",
    "青笹教授",
    "がんばりや",
    "モッチー",
    "Tarami",
    "くまさま",
    "Yozakura",
    "かすてら",
    "naka",
    "白衣さむね",
    "たまら",
    "帯刀先生",
    "たいしょう",
    "フッジー",
    "Anedan",
    "ぱんだ",
    "Fujicco",
    "みすと",
    "Yumeiro",
    "蒼衣っち",
    "きらり",
    "笹刀教授",
    "げんまい",
    "モギー",
    "Tenedan",
    "こあら",
    "Mochin",
    "すいか",
    "Kino",
    "黒羽さんです",
    "ほしいろ",
    "兜",
    "みやこ",
    "ピーチー",
    "Toridan",
    "りすん",
    "Sora",
    "さくらんぼ",
    "Hana",
    "茶さんまる",
    "ゆずる",
    "フッデ",
    "きんとう",
    "ベリー",
    "Eneban",
    "ぺんぎ",
    "Yuzuru",
  ];

  shuffleUserIds(userIds);

  //賛成意見分のデータ作成
  ProsResult = ProsContents.map(function (consContent: string) {
    let data = {
      id: index,
      content: consContent,
      name: userNames[userIds[index] - 1],
      profilePicture: "/userIcons/Profile_" + userIds[index] + ".png",
      label: 1,
    } as TweetData;

    index++;

    return data;
  });

  //反対意見分のデータ作成
  ConsResult = ConsContents.map(function (consContent: string) {
    let data = {
      id: index,
      content: consContent,
      name: userNames[userIds[index] - 1],
      profilePicture: "/userIcons/Profile_" + userIds[index] + ".png",
      label: 0,
    } as TweetData;

    index++;
    return data;
  });

  const result = ProsResult.concat(ConsResult);

  console.log(result);

  return result;
}

function shuffleUserIds(userIds: number[]) {
  let length = userIds.length;

  while (length) {
    let randomNumber = Math.floor(Math.random() * length);
    let randomItem = userIds[--length];
    userIds[length] = userIds[randomNumber];
    userIds[randomNumber] = randomItem;
  }
}

export default handler;
