import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Braille, LightBulb } from "@navikt/ds-icons";
import { ToggleGroup } from "@navikt/ds-react";
import { Header } from "@navikt/ds-react-internal";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import HeaderLogo from "../../public/HeaderLogo";

export interface IPerson {
  status: number;
  name: string;
  mail?: string;
  ident?: string;
}
const Heading: React.FC<IPerson> = (user) => {
  const [value, setValue] = useState("forslag");
  const router = useRouter();

  const handleChange = (x) => {
    setValue(x);
    value == "forslag" ? router.push("/roadmap") : router.push("/");
  };

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
      <>{console.log(user == undefined ? user.name : "ikke her")}</>
      <p>{"User: " + user.name + ": " + user.status}</p>
    </Header>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const user = fetch(`/api/auth`).then(async (res) => {
    const json = await res.json();
    if (json?.status === 200) {
      return json;
    } else {
      return {
        status: 200,
        name: "Feil Feilesen",
        mail: "feil@nav.no",
        ident: "H12456",
      };
    }
  });

  return { props: { user } };
}

export default Heading;
