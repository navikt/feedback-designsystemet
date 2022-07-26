import { Checkbox, CheckboxGroup, Search, Select } from "@navikt/ds-react";

/* import Layout from "../components/layout"; */

const SortingBox = ({ tags }) => {
  console.log(tags);
  const handleChange = (val: any[]) => {};
  return (
    <div>
      <CheckboxGroup
        legend="Velg status:"
        onChange={(val: any[]) => handleChange(val)}
        size="medium"
      >
        {tags &&
          tags.map((tag, index) => (
            <Checkbox key={index} value={tag.title}>
              {tag.title}
            </Checkbox>
          ))}
      </CheckboxGroup>

      <Select label="Velg kategori:" size="medium">
        <option value="">Velg kategori</option>
        <option value="komponent">Komponent</option>
        <option value="figma">Figma</option>
      </Select>
    </div>
  );
};

export default SortingBox;
