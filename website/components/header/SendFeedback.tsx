import "@navikt/ds-css";
import { Modal, Button, Heading } from "@navikt/ds-react";
import { Add } from "@navikt/ds-icons";
import { useState } from "react";

const SendFeedback = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        size="medium"
        onClick={() => setOpenState(true)}
      >
        <Add aria-hidden />
        Send inn forslag
      </Button>
      <Modal
        open={openState}
        aria-label="Send inn forslag"
        onClose={() => setOpenState(false)}
      >
        <Modal.Content>
          <Heading spacing level="1" size="large">
            Send inn forslag til Designsystemet
          </Heading>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default SendFeedback;
