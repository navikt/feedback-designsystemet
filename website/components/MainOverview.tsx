import { Accordion } from "@navikt/ds-react";
import { Chrono } from "react-chrono";
import { PostProps } from "../pages";
import CardList from "./CardList";
import Divider from "./Divider";
import Planlegging from "../public/Planlegging";
import Utvikling from "../public/Utvikling";
import Implementering from "../public/Implementering";

const MainOverview: React.FC<PostProps> = ({ posts }) => {
  const items = [
    {
      title: "Planlegges",
    },
    { title: "Utvikles" },
    { title: "Implementeres" },
  ];
  return (
    <div className="max-w-[2200px] mx-auto">
      <p className="mt-20 mx-[20rem] text-left">
        {
          "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. And where you come from. I saw part of the message he was. I seem to have found it. General Kenobi, years ago you served my father in the Clone."
        }
      </p>
      <Accordion className="mt-10" color="white">
        <Accordion.Item color="white" defaultOpen={true}>
          <Divider name="Til avstemning" />
          <Accordion.Header className="flex flex-col border border-none">
            Her kan du stemme fram oppgaver Designsystemet burde priotere
          </Accordion.Header>
          <Accordion.Content color="white" className="border border-none">
            <CardList posts={posts} category="Open" />
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Påbegynte oppgaver" />
        <Accordion.Item>
          <Accordion.Header className="flex flex-col">
            Her får du en oversikt over statusen til igangsatte oppgaver
          </Accordion.Header>
          <Accordion.Content>
            <Chrono
              timelineCircleDimension={35}
              activeItemIndex={-1}
              disableClickOnCircle={true}
              hideControls={true}
              theme={{
                primary: "#005B82",
                secondary: "#e5e5e5",
                cardBgColor: "#CFCFCF",
              }}
              mode="VERTICAL"
              items={items}
              focusActiveItemOnLoad={false}
              allowDynamicUpdate={true}
            >
              <div className="chrono-icons">
                <Planlegging />
                <Utvikling />
                <Implementering />
              </div>
              <CardList roadmap={true} posts={posts} category="In Progress" />
              <CardList roadmap={true} posts={posts} category="Done" />
              <CardList roadmap={true} posts={posts} category="Open" />
            </Chrono>
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Lansert" />
        <Accordion.Item>
          <Accordion.Header className="flex flex-col">
            Her får du en oversikt over ferdigstilte oppgaver til Designsystemet
          </Accordion.Header>
          <Accordion.Content>
            <CardList posts={posts} category="Done" />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MainOverview;
