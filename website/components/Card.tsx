import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import { useState } from "react";

interface IPost {
  author: String;
  title: String;
  textBody: String;
  content?: any;
  publishedAt: Date;
  votes: Number;
  state: String;
}

const Card = () => {
  const [openState, setOpenState] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpenState(true)}>Åpne Modal</Button>
      <Modal
        open={openState}
        aria-label="Modal demo"
        onClose={() => setOpenState((x) => !x)}
      >
        <Modal.Content>
          <Heading spacing level="1" size="large">
            Laborum proident id ullamco
          </Heading>
          <Heading spacing level="2" size="medium">
            Excepteur labore nostrud incididunt exercitation.
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
