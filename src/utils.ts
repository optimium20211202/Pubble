import { topicList } from "@/topics";
import {
  topicListForRecomendation,
  contentsListForRecommendations,
} from "@/topicsForRecomendation";
import { RecomendContent } from "@/types";

export const getTopic = (topicId: number) => {
  return topicList.find((topic) => topic.id === topicId);
};

export const getTopicIds = () => {
  return topicList.map((topic) => topic.id);
};

export const getContents = (topicId: number) => {
  return topicList.find((topic) => topic.id === topicId)?.contents;
};

export const getPosAndNegContents = (topicId: number) => {
  const contents = getContents(topicId);
  return [
    contents?.filter((content) => content.label === 0),
    contents?.filter((content) => content.label === 1),
  ];
};

//以下レコメンドゲーム用
export const getTopicForRecomendation = (topicId: number) => {
  return topicListForRecomendation.find((topic) => topic.id === topicId);
};

export const getTopicIdsForRecomendation = () => {
  return topicListForRecomendation.map((topic) => topic.id);
};

export const getContentsForRecomendation = (topicId: number) => {
  return topicListForRecomendation.find((topic) => topic.id === topicId)
    ?.contents;
};

export const getContentsForGame = () => {
  const strongSupportContent = getRandomGameContent(
    contentsListForRecommendations.filter(
      (content) => content.type === "strongSupport"
    ),
    2
  );

  const weakSupportContent = getRandomGameContent(
    contentsListForRecommendations.filter(
      (content) => content.type === "weakSupport"
    ),
    3
  );

  const weakObjectionContent = getRandomGameContent(
    contentsListForRecommendations.filter(
      (content) => content.type === "weakObjection"
    ),
    3
  );

  const strongObjectionContent = getRandomGameContent(
    contentsListForRecommendations.filter(
      (content) => content.type === "strongObjection"
    ),
    2
  );

  return strongSupportContent
    .concat(weakSupportContent)
    .concat(strongObjectionContent)
    .concat(weakObjectionContent);
};

function getRandomGameContent(
  arr: RecomendContent[],
  count: number
): RecomendContent[] {
  const result: any[] = [];
  const arrayCopy = [...arr]; // 元の配列を変更しないようにコピーを作成

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}
