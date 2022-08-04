import Divider from "../components/Divider";
import CardList from "../components/CardList";
import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import { PostProps } from ".";
import { BodyShort } from "@navikt/ds-react";

const Archive: React.FC<PostProps> = ({ posts }) => {
  return (
    <>
      <Divider name="Arkiv" color="black-200" width="2" />
      <BodyShort className="text-center text-gray-800">
        Dette er en oversikt over funksjonaliteter som er implementert
      </BodyShort>
      <CardList posts={posts} category="Done" />
    </>
  );
};

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"] | order(priority desc, _updatedAt desc) {
      title,
      description,
      _updatedAt,
      slug,
      "tags":tags[]->title,
      "status":status->title
    }
    `
  );
  return {
    props: {
      posts,
    },
  };
}
export default Archive;
