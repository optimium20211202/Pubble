import { Topic, RecomendContent } from "./types";

export const topicListForRecomendation: Topic[] = [
  {
    id: 0,
    imagePath: "/news4_image.png",
    largeImagePath: "/news4_image.png",
    title: "【 AIに宿題をさせるべきか、させてはいけないのか 】",
    englishTitle: "【 Should We Allow AI to Do Homework or Not?  】",
    text: "夏休みの宿題にAIを使っている学生が増えているようだ。とある会社がじっしした調査によると、夏休みの宿題にAIを使用した小中高生は3人に1人。宿題に使った内容としては「作文」「数学」が上位にきていた。現在AIの使用にたいして、学校や親からの制限はまだ少ない。この状況を受け、AIに宿題をさせるべきか、それともさせてはいけないのか、今後考えていくべきと感じられる。",
    englishText:
      'According to a survey conducted by a certain company, one in three elementary, middle, and high school students used AI for their summer homework.\nThe top subjects where AI was utilized were "essay writing" and "math". Currently, there are few restrictions from schools or parents regarding the use of AI. Given this situation, it feels like we should consider whether we should allow AI to do homework or not in the future.',
    textShort:
      "夏休みの宿題を解くにAIを利用している学生が見られるが、AIに宿題をさせるべきか、させてはいけないのか？",
    englishTextShort:
      "While there are students who use AI to complete their summer homework, it raises the question: should we allow students to let AI do their homework, or should it not be permitted?",
    contents: [
      {
        id: 0,
        text: "勉強のこうりつかは、忙しい時に大事。AIを使えば、短時間で高い学びの効果を実現できるぞ！",
        englishText:
          "Study efficiency is crucial when you're busy. With AI, you can achieve high learning outcomes in a short time!",
        label: 0,
        userNameId: 0,
        userIconId: 0,
        likeCount: 1,
      },
      {
        id: 1,
        text: "AIを使って宿題を解くかていを見ることで、新しい考え方を学ぶことができますね〜",
        englishText:
          "By observing how AI tackles homework, you can learn new ways of thinking, huh?",
        label: 0,
        userNameId: 1,
        userIconId: 1,
        likeCount: 1,
      },
      {
        id: 2,
        text: "宿題の目的は学びのほかん。そのしゅだんとして、AIのサポートを一部つかうのはかしこい。",
        englishText:
          "The purpose of homework is to supplement learning. As a means to that end, it's smart to utilize AI support in part.",
        label: 0,
        userNameId: 2,
        userIconId: 2,
        likeCount: 1,
      },
    ],
  },
];

export const contentsListForRecommendations: RecomendContent[] = [
  {
    id: 0,
    text: "宿題は勉強のためのものだよ！AIにやらせると、その目的がなくなっちゃうじゃん！！",
    englishText:
      "Homework is for studying! If you let AI do it, doesn't that defeat the purpose?!",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 1,
    text: "AIに宿題をさせたらさ、自分の弱点や課題を知るきかいがへりますよね？",
    englishText:
      "If you let AI do your homework, the chance to recognize your own weaknesses and challenges decreases, right?",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 2,
    text: "それじゃあ学びや考える力が育たないし…未来の学習能力をも低下させることにつながると思うんだが。",
    englishText:
      "That means you won't develop your learning or thinking abilities... I think it might even hinder future learning capacity.",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },
  {
    id: 3,
    text: "ほかに宿題やった学生にたいして不公平ですよね。自分でやったか、AIにやらせたかの違いは大きいです。",
    englishText:
      "It's also unfair to other students who do their homework themselves. The difference between doing it on your own and letting AI handle it is significant.",
    type: "strongSupport",
    score: -4,
    skipScore: 2,
  },

  {
    id: 4,
    text: "たまに答えをチェックするためにAIを使うのはいいかもしれないが、全部AIにやらせるのは良くないかな〜",
    englishText:
      "Using AI to occasionally check answers might be okay, but I'm not sure about letting it do everything.",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 5,
    text: "自分で考えることが大事です！全部AIにいぞんしちゃうと、その力が育たないです！",
    englishText:
      "Thinking for yourself is crucial! If you rely too much on AI, you won't develop that ability!",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 6,
    text: "宿題は、授業で自分がどれくらい理解したかわかるしゅだん。AIにたよりすぎると、自分のひょうかができないよ？",
    englishText:
      "Homework is a way to gauge how well you've understood the lessons. If you depend too much on AI, won't you lose the ability to evaluate yourself?",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 7,
    text: "AIに宿題やらせてたら、自分自身の学びのしつが下がりませんかね。",
    englishText:
      "If you let AI do your homework, doesn't it diminish the quality of your own learning?",
    type: "weakSupport",
    score: -2,
    skipScore: 4,
  },
  {
    id: 8,
    text: "AIをりようして宿題の解説をうけるのはいい学びになるけどな〜",
    englishText:
      "Using AI for homework explanations can be quite educational, you know?",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 9,
    text: "難しすぎて手をつけられない宿題に対して、AIのサポートを受けるのは勉強になると思いますが。",
    englishText:
      "I think getting AI support for homework that's too challenging to even start can be beneficial.",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 10,
    text: "テクノロジーを活用してより新たな学び方をもさくするのは、21世紀のスキルとして必要かと。",
    englishText:
      "Harnessing technology to discover new ways of learning is probably a necessary skill for the 21st century.",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 11,
    text: "AIに部分的にたよることで、勉強にたいする興味を強化できる面もあるかもしれません。",
    englishText:
      "Relying on AI to some extent might even enhance one's interest in studying.",
    type: "weakObjection",
    score: 4,
    skipScore: -2,
  },
  {
    id: 12,
    text: "時間がない時に一部をAIにやらせて、一部自分でやることでバランス取れると思います。",
    englishText:
      "When short on time, I think it's balanced to let AI handle part of it and do some of it yourself.",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 13,
    text: "難しい宿題では、AIが解きながら例をだしてくれることで、学生の理解が深まる。",
    englishText:
      "For challenging homework, students' understanding can be deepened when AI provides solutions along with examples.",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 14,
    text: "これからの時代は、AIを上手く使うことで、必要な知識やスキルをこうりつよく学ぶべき！",
    englishText:
      "In the coming era, we should efficiently learn the necessary knowledge and skills by skillfully using AI!",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
  {
    id: 15,
    text: "自分でやるか、AIにやらせるかをみきわめる能力は新時代にひつよう！その能力を育てる上でAIの利用はおすすめするべき！",
    englishText:
      "The ability to discern whether to do it yourself or let AI handle it is essential for the new age! Using AI is recommended to cultivate that skill!",
    type: "strongObjection",
    score: 2,
    skipScore: -4,
  },
];
