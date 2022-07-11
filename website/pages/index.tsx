import React from "react";
import { Header } from "@navikt/ds-react-internal";
import "@navikt/ds-css-internal";
import "@navikt/ds-css";
import { ShakeHands } from "@navikt/ds-icons";
import CardList from "../components/posts/CardList";

const Home = () => {
  return (
    <>
      <Header>
        <Header.Title>
          <ShakeHands />
          Aksel
        </Header.Title>
        <Header.User name="Feedbacksystemet" />
      </Header>
      <CardList />
    </>
  );
};

export default Home;
