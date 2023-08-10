export type LabelType = 0 | 1;

export interface Content {
  id: number;
  text: string;
  label: LabelType;
}
export interface Topic {
  id: number;
  imagePath: string;
  largeImagePath: string;
  title: string;
  text: string;
  textShort: string;
  unavailable?: boolean;
  contents?: Content[];
}
export interface Tutorial {
  id: number;
  imagePath: string;
  text: string;
}

export const MODE = {
  SELECTION: "selection",
  RECOMMENDATION: "recommendation",
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];
