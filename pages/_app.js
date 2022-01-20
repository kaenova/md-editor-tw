import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>KMA: Markdown Editor</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" type="image/png" href="/Favicon.png" />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
