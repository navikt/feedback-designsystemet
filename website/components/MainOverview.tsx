import { Accordion } from "@navikt/ds-react";
import { PostProps } from "../pages";
import CardList from "./CardList";
import Divider from "./Divider";
import Timeline from "./Timeline";

const MainOverview: React.FC<PostProps> = ({ posts }) => {
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
            <Timeline posts={posts} />
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
