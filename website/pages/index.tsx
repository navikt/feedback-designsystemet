import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import { useState } from "react";
import MainOverview from "../components/MainOverview";

export interface PostProps {
  posts?: ICard[];
  tags?: Tag[];
}

export interface Tag {
  title: String;
}

const Home: React.FC<PostProps> = ({ posts }) => {
  return (
    <>
      <MainOverview posts={posts} />
    </>
  );
};

export async function getServerSideProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"]| order(priority desc, _updatedAt desc) {
      title,
      shortdescription,
      _updatedAt,
      slug,
      votes,
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

export default Home;
