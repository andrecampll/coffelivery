import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class DocumentComponent extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#01164A" />
          <meta name="msapplication-navbutton-color" content="#01164A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#01164A"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
