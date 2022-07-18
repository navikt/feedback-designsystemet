import client from "../lib/sanity";
import Card, { ICard } from "../components/Card";

export interface PostProps {
  posts: ICard[];
}

const Home: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className=" contents-center md:self-center grid sm:grid-cols-2 md:grid-cols-3 grid-rows-none gap-5 place-content-center h-41 bg-grey-200">
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
