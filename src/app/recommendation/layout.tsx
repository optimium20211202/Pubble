type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <body className="bg-recommendationBg">{children}</body>;
}
