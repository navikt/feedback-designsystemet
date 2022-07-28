import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Braille, LightBulb } from "@navikt/ds-icons";
import { ToggleGroup } from "@navikt/ds-react";
import { Header } from "@navikt/ds-react-internal";
import { useRouter } from "next/router";
import { useState } from "react";
import { isValidated, isValidatedApi } from "../../lib/auth/auth";
import HeaderLogo from "../../public/HeaderLogo";

export interface IData {
  status: number;
  name: string;
  email?: string;
  ident?: string;
}
const Heading: React.FC<IData> = (user) => {
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
      <p>{"User: " + user.name + ": " + user.status}</p>
    </Header>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const user = await fetch("/api/auth");
  console.log("User: " + user);
  // Pass data to the page via props
  return { props: { user } };
}

export default Heading;
