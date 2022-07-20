import { BodyLong, Heading, Tag } from "@navikt/ds-react";
import VotingPanel from "../../components/VotingPanel";
import client from "../../lib/sanity/sanity";

const Post = ({ post }) => {
  const {
    title = "missing title",
    name = "missing name",
    textfield = "missing description",
    photo = null,
    tags = null,
  } = post;

  return (
    <div>
      <VotingPanel />
      {tags &&
        tags.length > 0 &&
        tags.map((tag, index) => (
          <Tag key={index} variant="info" size="medium">
            {tag}
          </Tag>
        ))}
      <Heading size="xlarge" className="text-center pb-20">
        {title}
      </Heading>
      <BodyLong className="text-center px-60" size="medium">
        {textfield}
      </BodyLong>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
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
