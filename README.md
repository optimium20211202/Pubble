## 起動方法

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# ChatGPTについて

System PromptとUser Promptを使ってトピックに対して2軸の文章を20個ずつ生成してJSON形式で出力させています。日本語のトピック入力に対してはほぼ100%指定したJSONフォーマットで出力させることに成功しています。

gpt4の方が精度が高く感情豊かな出力が得られますが、処理時間が倍以上かかるため、gpt3.5を使うことにしました。

それでも約40~50秒かかるため、間違い探しゲームを挟むことで子どもたちが退屈しないような工夫を入れています。

実装箇所:
https://github.com/optimium20211202/AI_Crypto_Hackathon/blob/254157e6882f9afa9481c32586d42a12e8d4a377/src/pages/api/contents.ts#L7


# コンテンツ表示ロジック

2軸に分類されたコンテンツに対して、ユーザーの選択に応じて段々と表示が偏るようにしています。

実装箇所:
https://github.com/optimium20211202/AI_Crypto_Hackathon/blob/fd4830861da7959c03c7176927e158be7a340998/src/pages/game.tsx#L96

# 実行環境

実行環境はVercelとHerokuを検討しましたが、1分以上の処理はTimeoutになってしまう仕様のなので、長時間の処理が可能なGoogle Cloud Runを利用することにしました。