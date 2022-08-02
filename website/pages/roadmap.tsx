import Divider from "../components/Divider";
import CardList from "../components/CardList";
import client from "../lib/sanity/sanity";
import { ICard } from "../components/Card";
import { PostProps } from ".";

const Roadmap: React.FC<PostProps> = ({ posts }) => {
  return (
    <>
      <Divider name="Roadmap" />
      <p className="mx-auto">
        Tidslinje som viser hvor langt Designsystemet er kommet med oppgavene
        sine
      </p>
      <Divider name="In Progress" roadmap={true} />
      <CardList posts={posts} category="In Progress" />
      <Divider name="Done" roadmap={true} />
      <CardList posts={posts} category="Done" />
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
      _updatedAt,
      slug,
      "tags":tags[]->title,
      "state":state->title
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
