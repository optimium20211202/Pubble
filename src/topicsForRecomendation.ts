import { Topic, RecomendContent } from "./types";

export const topicListForRecomendation: Topic[] = [
  {
    id: 0,
    imagePath: "/news2_image.png",
    largeImagePath: "/news2_image_large.png",
    title: "【 AIは人の仕事を助けるのか、それとも奪うのか 】",
    text: "「Job総研」の調査により、多くの職業人がAIによる仕事の効率化を認識している一方で、AIによる仕事の奪取を懸念していることが明らかになりました。 \n\n特に若年層ではこの懸念が顕著で、AIの普及による影響が焦点となっています。AIの進化は社会に大きな影響を与えることは間違いありませんが、それが助けになるのか、それとも仕事を奪うのかはこれからの発展次第です。",
    textShort:
      "AIの進化は社会に大きな影響を与える。それが助けになるのか、それとも仕事を奪うのか？",
    contents: [
      {
        id: 0,
        text: "近くのスーパーで自動レジが増え、従業員は減った。AIがさらに進化すると、このような仕事はさらに減るだろうね。",
        label: 0,
      },
      {
        id: 1,
        text: "AIロボットを導入することで、工場で人がいらなくなってます。確かに生産効率は上がっているんですけど。",
        label: 0,
      },
      {
        id: 2,
        text: "図書館でのAIアシスタントが増えて、本の選び方やオススメをする人間のアドバイザーの役割が奪われていますよ。",
        label: 0,
      },
    ],
  },
];

export const contentsListForRecommendations: RecomendContent[] = [
  {
    id: 0,
    text: "レストランでの注文もAIが受け付ける日が近いです。もう店員さんに注文を伝えることすらなくなりますね。",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 1,
    text: "自動運転車が増えれば、タクシーやトラックの運転手の仕事はどうなるの？",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 2,
    text: "コールセンターもAIが応対するようになれば、担当する人もなくなるんじゃない？",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 3,
    text: "だんだんとスーパーのレジもセルフ化しているし、レジのお姉さんの仕事も奪われてしまいますね。",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },

  {
    id: 4,
    text: "AIのロボットが建築現場で作業する映像を見たけど、これから作業員の需要って減るのかな？",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 5,
    text: "データ入力とかの仕事は、AIが速く正確にできる分の仕事はなくなる気がします。",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 6,
    text: "アプリでの顔認証って、警備員の仕事を代わりにしてるように思えるんだけど。",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 7,
    text: "オンライン診療のAIが増えれば、受付の仕事って少なくなりますよね。",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 8,
    text: "私の会社では、AIが一部の仕事をしてくれるから、それで私たちは他の仕事の時間が増えて助かってます。",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 9,
    text: "美容師さんがAIを使って髪型を提案してくれる。人のセンスとAIのデータが合わさって最高の提案ができるよね。",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 10,
    text: "農家の人がAIを使って作物の状態をチェックしてます。早めに対応できるから収穫量が増えたって聞きました。",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 11,
    text: "工場のAIロボットは、重たいものを持ち上げるサポートをしてくれるから、労働者の怪我のリスクが減るって聞いた。",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 12,
    text: "友達のデザイナーは、AIを使って色々な組み合わせを試すことができ、クリエイティブな時間が増えたって言ってた。",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 13,
    text: "飲食店で、AIが必要の内容を予測してくれるから、無駄な仕事が減り、売上が安定しましたよ。",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 14,
    text: " 学校の先生が、AIを使って生徒の学習進度をチェックして個別対応してくれます。学生たちの学びが進化しています。",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 15,
    text: "ショップではAIが来店客の動きを分析して、商品の置き場を改善。店員さんも喜んでいるんだよ。",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
];
