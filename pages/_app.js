import Head from "next/head"
import "../styles/globals.css"

function Root({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Root
