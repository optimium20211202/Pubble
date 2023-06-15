import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      // https://daisyui.com/docs/themes/
      <Html data-theme="light">
        <Head>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
