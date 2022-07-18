import client from "../../lib/sanity";

const Post = ({ post }) => {
  const { title, name, textfield, _updatedAt, photo, tags } = post;

  return (
    <div>
      <a className="" href={"/"}>
        {" "}
        {"< Tilbake"} {console.log(post)}
      </a>
      <h1>{title}</h1>
      <h2>{_updatedAt}</h2>
      <h2>{textfield}</h2>
      <h2>{tags.length > 0 && tags.map((tag) => <p>{tag}</p>)}</h2>
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
    *[_type == "post" && slug.current == $slug][0]{
      title,
      name,
      slug,
      textfield,
      "tags": tags[]->title
    }
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
