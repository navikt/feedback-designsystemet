import "../styles/globals.css";
import "../components/header/Heading.css";
import Heading from "../components/header/Heading";
import Head from "next/head";
import { useState } from "react";
import { Button } from "@navikt/ds-react";
import HeaderLogo from "../public/HeaderLogo";


export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Feedbacksystemet - Aksel</title>
        <meta property="og:title" content="Feedbacksystemet - Aksel" />
        <meta property="og:image" content="/public/favicon.ico" />
      </Head>
      <Heading />
      {!loggedIn ? (
        <Button onClick={() => setLoggedIn(true)}>Logg inn</Button>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
