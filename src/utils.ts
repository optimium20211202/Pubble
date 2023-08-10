import { topicList } from "@/topics";

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
