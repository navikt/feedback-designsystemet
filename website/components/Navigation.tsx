import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import { Braille, LightBulb } from "@navikt/ds-icons";
import { ToggleGroup } from "@navikt/ds-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const [value, setValue] = useState("forslag");
  const router = useRouter();

  const handleChange = (x) => {
    setValue(x);
    router.push("/" + x);
  };
  return (
    <ToggleGroup onChange={handleChange} value={value} size="medium">
      <ToggleGroup.Item value="forslag">
        <LightBulb aria-hidden />
        Forslag
      </ToggleGroup.Item>
      <ToggleGroup.Item value="roadmap">
        <Braille aria-hidden />
        Roadmap
      </ToggleGroup.Item>
    </ToggleGroup>
  );
}
