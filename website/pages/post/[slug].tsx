import client from "../../lib/sanity";

const Post = ({ post }) => {
  const { title, name } = post;

  return (
    <div>
      <h1>Test Post</h1>
      <h2>
        {console.log(post)} :::
        {title} {name}{" "}
      </h2>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{name, title}
    `,
    {
      slug,
    }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
