import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Hachi+Maru+Pop&family=Hina+Mincho&family=Kaisei+Decol:wght@400;500;700&family=Kaisei+HarunoUmi:wght@400;500;700&family=Kaisei+Opti:wght@400;500;700&family=Kaisei+Tokumin:wght@400;500;700;800&family=Kiwi+Maru:wght@300;400;500&family=Klee+One:wght@400;600&family=Kosugi&family=Kosugi+Maru&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{``}</style>
      </Html>
    );
  }
}

export default MyDocument;
