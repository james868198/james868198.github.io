import React from 'react';
// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
// MUI Core
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" />
          <link rel="shortcut icon" href="./static/logo/favicon.ico" />
          <meta name="description" content="This is James Huang's portfolio"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side rendering (SSR).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

        const initialProps = await Document.getInitialProps(ctx);
        return {
        ...initialProps,
        styles: (
            <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            </>
        ),
        };
    } finally {
        sheet.seal();
    }
};

export default MyDocument;