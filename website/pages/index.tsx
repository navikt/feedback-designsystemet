import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import CardList from "../components/CardList";
import { BodyShort } from "@navikt/ds-react";
import Divider from "../components/Divider";

export interface PostProps {
  posts?: ICard[];
  tags?: Tag[];
}

export interface Tag {
  title: String;
}

const Home: React.FC<PostProps> = ({ posts, tags }) => {
  return (
    <>
      <Divider name="Stem!" />
      <BodyShort className="text-center text-gray-800">
        Her kan du stemme på oppgaver Team Designsystemet skal jobbe med
      </BodyShort>
      <CardList posts={posts} category="Open" />
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
      "tags":tags[]->title,
      "state":state->title
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
