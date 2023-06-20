import type { NextApiRequest, NextApiResponse } from "next";
import { TweetData, GptOutputData } from "types";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
import { setTimeout } from "node:timers/promises";
import { sampleContents } from "utils/mockData";

const systemMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: `# 命令
これから以下の[## 制約条件]に厳密に従ってロールプレイを行ってください
    
## 制約条件
最終的な出力は、以下のJSON形式で出力してください
    
## 出力フォーマット
{"pros": [string, string, string,....], "cons": [string, string, string,...]}
`,
};

const getUserMessage = (theme: string) => {
  const userMessage: ChatCompletionRequestMessage = {
    role: "user",
    content: `以下の[# トピック]に関して、対立関係の主張を行うAチームとBチームに分かれてディベートするというロールプレイを行います。 
以下の[# 出力フロー]に従って、実行してください。
  
# トピック
「${theme}」
  
# 出力フロー
1. [# トピック]に対するAチームの主張を、妄想や陰謀論、SF的な発想で理由を含めてMECEで20個列挙して、JSONの"pros" Keyの配列に格納してください
2. [# トピック]に対するAチームと対立するBチームの主張を、Aチームとは別の妄想や陰謀論、SF的な発想で理由を含めてMECEで20個列挙して、JSONの"cons" Keyの配列に格納してください。
`,
  };
  return userMessage;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.CLOUD_RUN) {
    // vercelだと長時間のrequest対応できないのでmockデータを返す
    await setTimeout(5000);
    return res.status(200).json(sampleContents);
  }

  const theme = JSON.parse(req.body).theme;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const baseCompletion = await openai.createChatCompletion({
      // 0613は最新版。利用者が少なくてreponse早いらしい
      model: "gpt-3.5-turbo-0613",
      messages: [systemMessage, getUserMessage(theme)],
      temperature: 0,
    });

    console.log(baseCompletion.data.choices?.[0].message);
    const message: GptOutputData = JSON.parse(
      baseCompletion.data.choices?.[0].message?.content
        ? baseCompletion.data.choices?.[0].message?.content
        : ""
    );

    // console.log(message);

    const contents: TweetData[] = convertContents(message.cons, message.pros);

    res.status(200).json(contents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
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

  const unshuffledResult = ProsResult.concat(ConsResult);
  const result = unshuffledResult
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
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
