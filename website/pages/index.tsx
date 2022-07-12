import React from "react";
import "@navikt/ds-css-internal";
import "@navikt/ds-css";
import { ShakeHands } from "@navikt/ds-icons";
import CardList from "../components/posts/CardList";
import Header from "../components/Heading";
import Navigation from "../components/Navigation";
import SortingBox from "../components/SortingBox";

const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <SortingBox />
      <CardList />
    </>
  );
};

export default Home;
