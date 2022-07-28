import "../styles/globals.css";
import "../components/header/Heading.css";
import Heading from "../components/header/Heading";
import Head from "next/head";
import { useState } from "react";
import { AuthProvider } from "../lib/auth/authprovider";
import { ThemeProvider, studioTheme } from "@sanity/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={studioTheme}>
          <div className="flex flex-col mx-auto justify-center">
            <Head>
              <title>Feedbacksystemet - Aksel</title>
              <meta property="og:title" content="Feedbacksystemet - Aksel" />
              <meta property="og:image" content="/public/favicon.ico" />
            </Head>
            <Heading />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
