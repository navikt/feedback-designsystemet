import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";
import CardList from "../components/CardList";
import SortingBox from "../components/SortingBox";
import { Tag } from "@navikt/ds-react";

export interface PostProps {
  posts: ICard[];
  tags?: Tag[];
}

export interface Tag {
  title: String;
}

const Home: React.FC<PostProps> = ({ posts, tags }) => {
  return (
    <>
      <CardList posts={posts} category="" />
      <SortingBox tags={tags} />
    </>
  );
};

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"] {
      title,
      description,
      _updatedAt,
      slug,
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
