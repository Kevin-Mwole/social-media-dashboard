import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=optional"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{ __html: blockingSetInitialColorTheme }}
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

export default MyDocument

const blockingSetInitialColorTheme = `(function() {
  ${setInitialColorTheme.toString()}
  setInitialColorTheme()
})()`

function setInitialColorTheme() {
  function getInitialColorTheme() {
    const persistedColorPreference =
      window.localStorage.getItem("color-preference")

    if (persistedColorPreference) return persistedColorPreference
  }

  const colorTheme = getInitialColorTheme()
  if (colorTheme) {
    document.documentElement.dataset.userTheme = colorTheme
  }
}
