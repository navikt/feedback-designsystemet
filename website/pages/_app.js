import "../styles/globals.css";
import "../components/header/Heading.css";
import Heading from "../components/header/Heading";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Feedbacksystemet</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Heading />
      <Component {...pageProps} />
    </div>
  );
}
