import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="bg-gray-50 text-gray-950 h-full w-full relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
