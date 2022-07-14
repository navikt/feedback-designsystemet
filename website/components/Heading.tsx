import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Braille, LightBulb } from "@navikt/ds-icons";
import { ToggleGroup } from "@navikt/ds-react";
import { Header } from "@navikt/ds-react-internal";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Heading() {
  const [value, setValue] = useState("forslag");
  const router = useRouter();

  const handleChange = (x) => {
    setValue(x);
    router.push("/" + x);
  };

  return (
    <Header>
      <Header.Title as="h1">Feedback</Header.Title>
      <ToggleGroup
        className="toggleGroup"
        onChange={handleChange}
        value={value}
        size="medium"
      >
        <ToggleGroup.Item className="forslag" value="forslag">
          <LightBulb aria-hidden />
          Forslag
        </ToggleGroup.Item>
        <ToggleGroup.Item className="roadmap" value="roadmap">
          <Braille aria-hidden />
          Roadmap
        </ToggleGroup.Item>
      </ToggleGroup>
    </Header>
  );
}
