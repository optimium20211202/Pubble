import { MODE } from "@/types";

type Props = {
  children: React.ReactNode;
  params: {
    mode: string;
  };
};
export default function Layout({ children, params: { mode } }: Props) {
  const bgColor =
    mode === MODE.RECOMMENDATION ? "bg-recommendationBg" : "bg-defaultBg";
  return <body className={bgColor}>{children}</body>;
}
