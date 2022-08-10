import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Header } from "@navikt/ds-react-internal";
import { useEffect, useState } from "react";
import HeaderLogo from "../../public/HeaderLogo";
import SendFeedback from "./SendFeedback";
import { IPerson } from "../../lib/types/types";

const Heading: React.FC = () => {
  const [user, setUser] = useState<IPerson>(null);

  useEffect(() => {
    fetch(`/api/auth`).then(async (res) => {
      const json = await res.json();
      if (json?.status === 200) {
        setUser(json);
      }
    });
  }, []);

  return (
    <Header className="flex justify-between">
      <div className="ml-3 flex flex-row">
        <HeaderLogo aria-hidden />
        <Header.Title>Feedback</Header.Title>
      </div>
      <div className="flex flex-row">
        <SendFeedback />
        <Header.User id="username" name={user?.name.split(",")[0]} />
      </div>
    </Header>
  );
};

export default Heading;
