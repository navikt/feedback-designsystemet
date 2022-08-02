import { Accordion } from "@navikt/ds-react";
import { PostProps } from "../pages";
import CardList from "./CardList";
import Divider from "./Divider";

const MainOverview: React.FC<PostProps> = ({ posts }) => {
  return (
    <>
      <Accordion color="white">
        <Accordion.Item color="white" defaultOpen={true}>
          <Divider name="Stem!" />
          <Accordion.Header className="flex flex-col border border-none">
            Her kan du stemme på oppgaver Team Designsystemet skal jobbe med
          </Accordion.Header>
          <Accordion.Content color="white" className="border border-none">
            <CardList posts={posts} category="Open" />
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Planlagte oppgaver" />
        <Accordion.Item>
          <Accordion.Header className="flex flex-col">
            Her kan du stemme på oppgaver Team Designsystemet skal jobbe med
          </Accordion.Header>
          <Accordion.Content>
            <CardList posts={posts} category="In Progress" />
          </Accordion.Content>
        </Accordion.Item>
        <Divider name="Arkiv" />
        <Accordion.Item>
          <Accordion.Header className="flex flex-col">
            Her kan du stemme på oppgaver Team Designsystemet skal jobbe med
          </Accordion.Header>
          <Accordion.Content>
            <CardList posts={posts} category="Done" />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default MainOverview;
