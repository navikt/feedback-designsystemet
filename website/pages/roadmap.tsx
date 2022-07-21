import Divider from "../components/Divider";
import CardList from "../components/CardList";
import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import { PostProps } from ".";

const Roadmap: React.FC<PostProps> = ({ posts }) => {
  return (
    <div>
      <h1>Roadmap</h1>
      <Divider name="New Released" />
      <CardList posts={posts} />
      <Divider name="Hooga booga" />
    </div>
  );
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
export default Roadmap;
