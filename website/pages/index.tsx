import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import CardList from "../components/CardList";
import {
  Accordion,
  BodyShort,
  Checkbox,
  CheckboxGroup,
  Select,
} from "@navikt/ds-react";
import { useState } from "react";
import Divider from "../components/Divider";

export interface PostProps {
  posts?: ICard[];
  tags?: Tag[];
}

export interface Tag {
  title: String;
}

const Home: React.FC<PostProps> = ({ posts, tags }) => {
  const [filters, setFilters] = useState<string[]>(null);

  return (
    <>
      {/* <Accordion>
        <Accordion.Item>
          <Accordion.Header>Filtrering</Accordion.Header>
          <Accordion.Content>
            <CheckboxGroup
              legend="Velg status:"
              onChange={(v) => setFilters(v)}
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
      </Accordion> */}
      <Divider name="Stem!" />
      <BodyShort className="text-center text-gray-800">
        Her kan du stemme på oppgaver Team Designsystemet skal jobbe med
      </BodyShort>
      <CardList posts={posts} filters={filters} />
    </>
  );
};

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"]| order(priority desc, _updatedAt desc) {
      title,
      description,
      shortdescription,
      _updatedAt,
      slug,
      votes,
      "tags":tags[]->title
    }
    `
  );
  const tags = await client.fetch(
    `
    *[_type == "tag"] {
      title
    }
    `
  );
  return {
    props: {
      posts,
      tags,
    },
  };
}

export default Home;
