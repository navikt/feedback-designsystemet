import { Accordion } from "@navikt/ds-react";
import { PostProps } from "../lib/types/types";
import CardList from "./CardList";
import Divider from "./Divider";
import Timeline from "./Timeline";

const MainOverview: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="max-w-[2200px] mx-auto">
      <p id="infoText" className="mt-20 mx-[5rem] lg:mx-[20rem] text-center">
        Velkommen til Team Designsystemets feedbacksystem! Her legger vi ut
        potensielle funksjonaliteter som skal jobbes med i fremtiden, og gir deg
        en oversikt over fremgangen på påbegynte oppgaver. Hvert kort kan
        stemmes på, og gir oss innsikt i hva det er størst behov for.
      </p>
      <Accordion id="NAVaccordion" className="mt-10" color="white">
        <Accordion.Item color="white" defaultOpen={true}>
          <Divider name="Til avstemning" />
          <Accordion.Header className="flex flex-col border border-none">
            Her kan du stemme fram oppgaver du syntes er viktige å prioritere
          </Accordion.Header>
          <Accordion.Content color="white" className="border border-none">
            <CardList posts={posts} category="Open" />
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Påbegynte oppgaver" />
        <Accordion.Item id="oppgaver">
          <Accordion.Header className="flex flex-col">
            Her får du en oversikt over fremgangen til påbegynte oppgaver
          </Accordion.Header>
          <Accordion.Content>
            <Timeline posts={posts} />
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Lansert" />
        <Accordion.Item id="ferdigstilte">
          <Accordion.Header className="flex flex-col">
            Her får du en oversikt over lanserte oppgaver
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
