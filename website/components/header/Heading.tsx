import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Header } from "@navikt/ds-react-internal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderLogo from "../../public/HeaderLogo";
import SendFeedback from "./SendFeedback";

export interface IPerson {
  status: number;
  name: string;
  mail?: string;
  ident?: string;
}
const Heading: React.FC = () => {
  const [value, setValue] = useState("forslag");
  const router = useRouter();
  const [user, setUser] = useState<IPerson>(null);

  useEffect(() => {
    fetch(`/api/auth`).then(async (res) => {
      const json = await res.json();
      if (json?.status === 200) {
        setUser(json);
      } else {
        setUser({
          status: 200,
          name: "Lokalesen, Lokal",
          mail: "lokal@nav.no",
          ident: "H12456",
        });
      }
    });
  }, []);

  return (
    <Header className="flex justify-between">
      <div className="ml-3 flex flex-row">
        <HeaderLogo />
        <Header.Title>Feedback</Header.Title>
      </div>
      <div className="flex flex-row">
        <SendFeedback />
        <Header.User name={user?.name.split(",")[0]} />
      </div>
    </Header>
  );
};

export default Heading;
