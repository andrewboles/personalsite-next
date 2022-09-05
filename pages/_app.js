import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andrew Boles - Full Stack Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
