import { topicList } from "@/topics";
import { topicListForRecomendation } from "@/topicsForRecomendation";

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
