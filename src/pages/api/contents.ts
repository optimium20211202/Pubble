import type { NextApiRequest, NextApiResponse } from "next";
import { TweetData, GptOutputData } from "types";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
import { setTimeout } from "node:timers/promises";

const sampleContents = [
  {
    id: 28,
    content:
      "未来の交通手段や移動の便利さが現在の生活環境に合わないかもしれない",
    name: "青笹教授",
    profilePicture: "/userIcons/Profile_5.png",
    label: 0,
  },
  {
    id: 12,
    content: "未来のファッションやトレンドを知ることができる",
    name: "Hana",
    profilePicture: "/userIcons/Profile_42.png",
    label: 1,
  },
  {
    id: 23,
    content:
      "未来の医療技術や治療法が現在の医療と比べて高額で手に入らないかもしれない",
    name: "さくらもち",
    profilePicture: "/userIcons/Profile_1.png",
    label: 0,
  },
  {
    id: 5,
    content: "未来の経済やビジネスのトレンドを知ることができる",
    name: "黒羽さんです",
    profilePicture: "/userIcons/Profile_33.png",
    label: 1,
  },
  {
    id: 25,
    content:
      "未来のエネルギー技術や環境保護の取り組みが現在の生活様式に合わないかもしれない",
    name: "ぺんぎ",
    profilePicture: "/userIcons/Profile_49.png",
    label: 0,
  },
  {
    id: 26,
    content:
      "未来の経済やビジネスのトレンドが現在の仕事や経済状況に影響を与えるかもしれない",
    name: "きんとう",
    profilePicture: "/userIcons/Profile_46.png",
    label: 0,
  },
  {
    id: 37,
    content:
      "未来の人類の進化や人間の可能性が現在の自分には関係ないかもしれない",
    name: "帯刀先生",
    profilePicture: "/userIcons/Profile_15.png",
    label: 0,
  },
  {
    id: 35,
    content:
      "未来の宇宙探査や宇宙開発の進展が現在の生活に直接影響を与えないかもしれない",
    name: "ゆずる",
    profilePicture: "/userIcons/Profile_44.png",
    label: 0,
  },
  {
    id: 27,
    content:
      "未来の芸術やエンターテイメントの進化が現在の楽しみ方に合わないかもしれない",
    name: "モギー",
    profilePicture: "/userIcons/Profile_27.png",
    label: 0,
  },
  {
    id: 36,
    content: "未来の政治や社会制度の変化が現在の価値観と合わないかもしれない",
    name: "茶さんまる",
    profilePicture: "/userIcons/Profile_43.png",
    label: 0,
  },
  {
    id: 13,
    content: "未来のコミュニケーション技術やツールを学ぶことができる",
    name: "たまら",
    profilePicture: "/userIcons/Profile_14.png",
    label: 1,
  },
  {
    id: 15,
    content: "未来の政治や社会制度の変化を学ぶことができる",
    name: "Yozakura",
    profilePicture: "/userIcons/Profile_10.png",
    label: 1,
  },
  {
    id: 32,
    content:
      "未来の人々の生活や暮らし方が現在の生活とは異なりすぎていて、馴染めないかもしれない",
    name: "Sora",
    profilePicture: "/userIcons/Profile_40.png",
    label: 0,
  },
  {
    id: 2,
    content: "未来の医療技術や治療法を学ぶことができる",
    name: "りすん",
    profilePicture: "/userIcons/Profile_39.png",
    label: 1,
  },
  {
    id: 29,
    content: "未来の食品や料理の進化が現在の味覚に合わないかもしれない",
    name: "げんまい",
    profilePicture: "/userIcons/Profile_26.png",
    label: 0,
  },
  {
    id: 10,
    content: "未来の社会問題に対してアイデアを得ることができる",
    name: "がんばりや",
    profilePicture: "/userIcons/Profile_6.png",
    label: 1,
  },
  {
    id: 34,
    content:
      "未来のコミュニケーション技術やツールが現在のコミュニケーション方法と合わないかもしれない",
    name: "Fujicco",
    profilePicture: "/userIcons/Profile_20.png",
    label: 0,
  },
  {
    id: 17,
    content: "未来の自然災害や環境変化に備えることができる",
    name: "Yuzuru",
    profilePicture: "/userIcons/Profile_50.png",
    label: 1,
  },
  {
    id: 0,
    content: "未来の科学技術や文化を知ることができる",
    name: "Eneban",
    profilePicture: "/userIcons/Profile_48.png",
    label: 1,
  },
  {
    id: 6,
    content: "未来の芸術やエンターテイメントの進化を体験することができる",
    name: "Mochin",
    profilePicture: "/userIcons/Profile_30.png",
    label: 1,
  },
  {
    id: 19,
    content: "未来の教育環境や学校の改革を知ることができる",
    name: "モッチー",
    profilePicture: "/userIcons/Profile_7.png",
    label: 1,
  },
  {
    id: 11,
    content: "未来の人々の生活や暮らし方を知ることができる",
    name: "フッジー",
    profilePicture: "/userIcons/Profile_17.png",
    label: 1,
  },
  {
    id: 22,
    content: "未来の社会問題や課題が重くのしかかり、心配になるかもしれない",
    name: "みすと",
    profilePicture: "/userIcons/Profile_21.png",
    label: 0,
  },
  {
    id: 18,
    content: "未来の医療保険や年金制度の改善策を学ぶことができる",
    name: "蒼衣っち",
    profilePicture: "/userIcons/Profile_23.png",
    label: 1,
  },
  {
    id: 4,
    content: "未来のエネルギー技術や環境保護の取り組みを学ぶことができる",
    name: "兜",
    profilePicture: "/userIcons/Profile_35.png",
    label: 1,
  },
  {
    id: 8,
    content: "未来の食品や料理の進化を味わうことができる",
    name: "ぱんだ",
    profilePicture: "/userIcons/Profile_19.png",
    label: 1,
  },
  {
    id: 1,
    content: "未来の社会の問題や課題を知ることができる",
    name: "すいか",
    profilePicture: "/userIcons/Profile_31.png",
    label: 1,
  },
  {
    id: 7,
    content: "未来の交通手段や移動の便利さを体験することができる",
    name: "Tarami",
    profilePicture: "/userIcons/Profile_8.png",
    label: 1,
  },
  {
    id: 39,
    content:
      "未来の医療保険や年金制度の改善策が現在の自分には関係ないかもしれない",
    name: "ブラックコート",
    profilePicture: "/userIcons/Profile_3.png",
    label: 0,
  },
  {
    id: 3,
    content: "未来の教育制度や学習方法を知ることができる",
    name: "フッデ",
    profilePicture: "/userIcons/Profile_45.png",
    label: 1,
  },
  {
    id: 30,
    content: "未来のスポーツや競技の進歩が現在の楽しみ方に合わないかもしれない",
    name: "こむぎ",
    profilePicture: "/userIcons/Profile_4.png",
    label: 0,
  },
  {
    id: 33,
    content:
      "未来のファッションやトレンドが現在のスタイルに合わないかもしれない",
    name: "笹刀教授",
    profilePicture: "/userIcons/Profile_25.png",
    label: 0,
  },
  {
    id: 40,
    content: "未来の教育環境や学校の改革が現在の自分には関係ないかもしれない",
    name: "きらり",
    profilePicture: "/userIcons/Profile_24.png",
    label: 0,
  },
  {
    id: 20,
    content: "未来の情報を知ることで現在の生活がつまらなく感じるかもしれない",
    name: "さくらんぼ",
    profilePicture: "/userIcons/Profile_41.png",
    label: 0,
  },
  {
    id: 14,
    content: "未来の宇宙探査や宇宙開発の進展を知ることができる",
    name: "yume",
    profilePicture: "/userIcons/Profile_2.png",
    label: 1,
  },
  {
    id: 9,
    content: "未来のスポーツや競技の進歩を見ることができる",
    name: "ピーチー",
    profilePicture: "/userIcons/Profile_37.png",
    label: 1,
  },
  {
    id: 38,
    content:
      "未来の自然災害や環境変化に備えることができても、現在の生活には直接影響を与えないかもしれない",
    name: "Tenedan",
    profilePicture: "/userIcons/Profile_28.png",
    label: 0,
  },
  {
    id: 16,
    content: "未来の人類の進化や人間の可能性を知ることができる",
    name: "くまさま",
    profilePicture: "/userIcons/Profile_9.png",
    label: 1,
  },
  {
    id: 31,
    content: "未来の社会問題に対してアイデアを得ても、実現が難しいかもしれない",
    name: "Kino",
    profilePicture: "/userIcons/Profile_32.png",
    label: 0,
  },
  {
    id: 21,
    content: "未来の技術や文化が理解できず、戸惑うかもしれない",
    name: "みやこ",
    profilePicture: "/userIcons/Profile_36.png",
    label: 0,
  },
  {
    id: 24,
    content: "未来の教育制度や学習方法が現在の価値観と合わないかもしれない",
    name: "ベリー",
    profilePicture: "/userIcons/Profile_47.png",
    label: 0,
  },
];
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body.input);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // TODO: 一旦モックデータ返すようにしておく
  await setTimeout(2000);
  return res.status(200).json(sampleContents);

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
