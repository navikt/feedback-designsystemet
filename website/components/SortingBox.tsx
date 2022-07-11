import { Checkbox, CheckboxGroup, Search, Select } from "@navikt/ds-react";
import { useState } from "react";

export default function SortingBox() {
  const handleChange = (val: any[]) => {};
  return (
    <div>
      <Search label="Sorter resultatene" size="medium" variant="simple" />

      <CheckboxGroup
        legend="Hvor vil du sitte?"
        onChange={(val: any[]) => handleChange(val)}
        size="medium"
      >
        <Checkbox value="Under utbedring">Under utbedring</Checkbox>
        <Checkbox value="Planlagt">Planlagt</Checkbox>
        <Checkbox value="Ferdig">Ferdig</Checkbox>
      </CheckboxGroup>

      <Select label="Hvilket land har du bosted i." size="medium">
        <option value="">Velg kategori</option>
        <option value="komponent">Komponent</option>
        <option value="figma">Figma</option>
      </Select>
    </div>
  );
}
