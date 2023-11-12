type Props = {
  children: React.ReactNode;
};

// https://github.com/vercel/next.js/issues/43704
// https://github.com/pacocoursey/next-themes/issues/152
// app routeで動的にbackground colorを変更する良い方法が定まっていない。
export default function GameLayout({ children }: Props) {
  return (
    <body className="pt-6 px-3 mx-auto" style={{backgroundColor:"#444", width:"390px"}}>
      {children}
    </body>
  );
}
