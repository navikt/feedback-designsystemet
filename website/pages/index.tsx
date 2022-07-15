import client from "../lib/sanity";

const Home = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post, index) => <div key={index}>{post.slug?.current}</div>)}
    </>
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
