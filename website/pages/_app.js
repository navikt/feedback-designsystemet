import "../styles/globals.css";
import "../components/header/Heading.css";
import Heading from "../components/header/Heading";
import Head from "next/head";
import { useState } from "react";
import { AuthProvider } from "../lib/auth/authprovider";
import { ThemeProvider, studioTheme } from "@sanity/ui";

export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={studioTheme}>
      <div className="flex flex-col mx-auto justify-center">
        <Head>
          <title>Feedbacksystemet - Aksel</title>
          <meta property="og:title" content="Feedbacksystemet - Aksel" />
          <meta property="og:image" content="/public/favicon.ico" />
        </Head>
        <AuthProvider>
          <Heading />
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
