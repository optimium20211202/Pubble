export type LabelType = 0 | 1;
export type ScoreType = 4 | 2 | -2 | -4;
export type RecomendationContentType =
  | "strongSupport"
  | "weakSupport"
  | "weakObjection"
  | "strongObjection";

export interface Content {
  id: number;
  text: string;
  englishText?: string;
  label: LabelType;
  userNameId: number;
  userIconId: number;
  likeCount: number;
}

export interface Name {
  name: string;
  englishName: string;
}

export interface Post {
  content: Content;
  userName: Name;
  userIcon: string;
}

export interface RecomendContent {
  id: number;
  text: string;
  englishText: string;
  type: RecomendationContentType;
  score: ScoreType; // いいねした時の得点
  skipScore: ScoreType; // skipした時の得点
}

export interface Topic {
  id: number;
  imagePath: string;
  largeImagePath: string;
  positiveTendencyText?: string;
  negativeTendencyText?: string;
  englishPositiveTendencyText?: string;
  englishNegativeTendencyText?: string;
  title: string;
  englishTitle?: string;
  text: string;
  englishText?: string;
  textShort: string;
  englishTextShort?: string;
  unavailable?: boolean;
  contents?: Content[];
}
export interface Tutorial {
  id: number;
  imagePath: string;
  text: string;
  englishText: string;
}

export const MODE = {
  SELECTION: "selection",
  RECOMMENDATION: "recommendation",
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];
