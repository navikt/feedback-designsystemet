import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";
import CardList from "../components/CardList";

export interface PostProps {
  posts: ICard[];
}

const Home: React.FC<PostProps> = ({ posts }) => {
  return <CardList posts={posts} />;
};

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"] {
      title,
      textfield,
      _updatedAt,
      slug,
      "tags":tags[]->title
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
