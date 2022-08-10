import "@navikt/ds-css";
import { Modal, Button, Heading, TextField, Textarea } from "@navikt/ds-react";
import { Add } from "@navikt/ds-icons";
import { useState } from "react";

const SendFeedback = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        id="forslagsKnapp"
        size="small"
        onClick={() => setOpenState(true)}
      >
        <Add aria-hidden />
        Send inn forslag
      </Button>
      <Modal
        open={openState}
        aria-label="Send inn forslag"
        onClose={() => setOpenState(false)}
        className="p-10"
      >
        <Modal.Content id="forslagsModal" className="space-y-6">
          <Heading id="forslagHeading" spacing level="1" size="large">
            Send inn forslag til Designsystemet
          </Heading>
          <TextField
            id="forslagTittel"
            label="Tittel"
            description="En tittle som kort oppsumerer forslaget du skal sende inn"
            size="medium"
          />
          <Textarea
            id="forslagBody"
            label="Beskrivelse"
            description="Hva har du lyst til å dele med oss?"
          />
          <Button
            id="forslagSendInn"
            variant="primary"
            size="medium"
            onClick={() => setOpenState(false)}
          >
            Send inn
          </Button>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SendFeedback;
