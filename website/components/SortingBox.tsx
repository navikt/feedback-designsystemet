import { Checkbox, CheckboxGroup, Search, Select } from "@navikt/ds-react";

import Layout from "../components/layout";

export default function SortingBox() {
  const handleChange = (val: any[]) => {};
  return (
    <div>
      <Layout>
        <Search label="Sorter resultatene" size="medium" variant="simple" />

        <CheckboxGroup
          legend="Velg status:"
          onChange={(val: any[]) => handleChange(val)}
          size="medium"
        >
          <Checkbox value="Under utbedring">Under utbedring</Checkbox>
          <Checkbox value="Planlagt">Planlagt</Checkbox>
          <Checkbox value="Ferdig">Ferdig</Checkbox>
        </CheckboxGroup>

        <Select label="Velg kategori:" size="medium">
          <option value="">Velg kategori</option>
          <option value="komponent">Komponent</option>
          <option value="figma">Figma</option>
        </Select>
      </Layout>
    </div>
  );
}
