import { BodyLong, Button, Heading, LinkPanel, Modal } from "@navikt/ds-react";
import { useState } from "react";
import { IPost } from "./CardList";

interface PostProps {
  Post: IPost;
}

const Card: React.FC<PostProps> = (Post) => {
  const [openState, setOpenState] = useState<boolean>(false);

  return (
    <>
      <LinkPanel onClick={() => setOpenState(true)} border>
        <LinkPanel.Title>{Post.Post.title}</LinkPanel.Title>
        <LinkPanel.Description>
          Om jobb, registrering, CV, dagpenger og feriepenger av dagpenger
        </LinkPanel.Description>
      </LinkPanel>
      <Modal
        open={openState}
        aria-label="Modal demo"
        onClose={() => setOpenState((x) => !x)}
      >
        <Modal.Content>
          <Heading spacing level="1" size="large">
            {Post.Post.author}
          </Heading>
          <Heading spacing level="2" size="medium">
            {Post.Post.textBody}
            {Post.Post.votes}
          </Heading>
          <BodyLong spacing>
            Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui
            incididunt dolor do ad ut. Incididunt eiusmod nostrud deserunt duis
            laborum. Proident aute culpa qui nostrud velit adipisicing minim.
            Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
            exercitation non minim minim pariatur sunt laborum ipsum.
            Exercitation nostrud est laborum magna non non aliqua qui esse.
          </BodyLong>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Card;
