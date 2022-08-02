import { Accordion, Checkbox, CheckboxGroup, Select } from "@navikt/ds-react";
import { PostProps, Tag } from "../pages";

/* import Layout from "../components/layout"; */

interface SortingProps {
  tags: Tag[]
}

const SortingBox: React.FC<SortingProps> = ({ tags }) => {
  const handleChange = (val: any[]) => {};
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Filtrering</Accordion.Header>
        <Accordion.Content>
          <CheckboxGroup
            legend="Velg status:"
            onChange={(val: any[]) => handleChange(val)}
            size="small"
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
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default SortingBox;
