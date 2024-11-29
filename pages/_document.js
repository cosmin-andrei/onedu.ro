// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Aici poți adăuga și alte meta tag-uri, script-uri, sau link-uri globale */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
