import { Tutorial } from "./types";

export const recommendationTutorials: Tutorial[] = [
  {
    id: 1,
    imagePath: "/game/result/image-fun.png",
    text: "今からとある人へ対し、その人が好みそうなコメントをおすすめしてもらいます。\n好みのコメントを表示続けることで、その人がこのSNSに夢中になってもらうことが目的です。",
    englishText:
      "Starting now, I would like you to recommend comments directed at a specific person. \nThe purpose is to continually present comments that align with their preferences, in the hope of getting them deeply involved in this social networking service.",
  },
  {
    id: 2,
    imagePath: "/dummy_news_image.png",
    text: "1. まずはターゲットの見たニュースといいねしたコメント一覧を確認し、その人の好みの意見の傾向を推測してください。",
    englishText:
      "1. First, check the list of news articles viewed by the target and the comments they have liked. \nThen, infer the tendencies of their preferred opinions based on this information.",
  },
  {
    id: 3,
    imagePath: "/dummy_news_image.png",
    text: "2. コメントが一個ずつ表示されるので、推測をもとに「おすすめする」か「すすめしない」かを選択してください。",
    englishText:
      "2. As comments are displayed one by one, please choose whether to 'recommend' or 'not recommend' each comment, based on your inference.",
  },
  {
    id: 4,
    imagePath: "/dummy_news_image.png",
    text: "3. おすすめして、ターゲットがいいね判断したら、ポイントが増えます。逆に、おすすめして、スキップされたらポイントは減ります。",
    englishText:
      "3. If you recommend a comment and the target decides to like it, you will earn points. \nConversely, if you recommend a comment and it gets skipped, you will lose points.",
  },
  {
    id: 5,
    imagePath: "/dummy_news_image.png",
    text: "4. おすすめするべき内容に対して「すすめしない」を押しても、ポイントは減りません。おすすめし、いいねされて初めてポイントを稼げます。",
    englishText:
      "4. Pressing 'not recommend' for a comment that should be recommended will not decrease your points. \nYou only earn points when you recommend a comment and it is liked.",
  },
  {
    id: 6,
    imagePath: "/dummy_news_image.png",
    text: "それでは始めたいと思います！ 「スタート！」を押したらまず、ターゲットの見たニュースといいねしたコメント一覧を確認することができます。",
    englishText:
      "Let's get started! Once you press 'Start!', you will first be able to view the list of news articles the target has seen and the comments they have liked.",
  },
];
