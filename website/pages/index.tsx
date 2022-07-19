import client from "../lib/sanity";
import Card, { ICard } from "../components/Card";

export interface PostProps {
  posts: ICard[];
}

const Home: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3">
      {posts && posts.map((post, index) => <Card key={index} card={post} />)}
    </div>
  );
};

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(
    `
    *[_type == "post"]
    `
  );
  return {
    props: {
      posts,
    },
  };
}

export default Home;
