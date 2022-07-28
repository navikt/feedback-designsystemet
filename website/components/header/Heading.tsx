import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Braille, LightBulb } from "@navikt/ds-icons";
import { ToggleGroup } from "@navikt/ds-react";
import { Header } from "@navikt/ds-react-internal";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import HeaderLogo from "../../public/HeaderLogo";

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

  const handleChange = (x) => {
    setValue(x);
    value == "forslag" ? router.push("/roadmap") : router.push("/");
  };

  const fetchUser = useCallback(() => {
    fetch(`/api/auth`).then(async (res) => {
      const json = await res.json();
      if (json?.status === 200) {
        setUser(json);
      } else {
        setUser({
          status: 200,
          name: "Feil Feilesen",
          mail: "feil@nav.no",
          ident: "H12456",
        });
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Header>
      <div className="ml-3 flex flex-row">
        <HeaderLogo />
        <Header.Title as="h1">Feedback</Header.Title>
      </div>
      <ToggleGroup
        className="toggleGroup"
        onChange={handleChange}
        value={value}
        size="medium"
      >
        <ToggleGroup.Item className="fane" value="forslag">
          <LightBulb aria-hidden />
          Forslag
        </ToggleGroup.Item>
        <ToggleGroup.Item className="fane" value="roadmap">
          <Braille aria-hidden />
          Roadmap
        </ToggleGroup.Item>
      </ToggleGroup>
      <>{console.log(user == undefined ? "ikke her" : user.name)}</>
      <p>{"User: " + user?.name + ": " + user?.status}</p>
    </Header>
  );
};

export default Heading;
