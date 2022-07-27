import { BodyLong, Heading, Tag } from "@navikt/ds-react";
import VotingPanel from "../../components/VotingPanel";
import client from "../../lib/sanity/sanity";
import { PortableText, PortableTextBlockComponent } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";

interface post {
  title: String;
  name: String;
  textfield: PortableTextBlockComponent;
  image?: any;
  tags?: Array<string>;
}

const Post = ({ post }) => {
  const {
    title = "missing title",
    name = "missing name",
    description = ["missing description"],
    image = null,
    tags = null,
  } = post;

  const imageProps = useNextSanityImage(client, image);

  return (
    <div className="flex flex-col mx-auto pt-10">
      <a href={"/"}>{"< Tilbake"}</a>
      <div className="pt-10 pb-4 space-x-1">
        {tags &&
          tags.length > 0 &&
          tags.map((tag, index) => (
            <Tag key={index} variant="info" size="medium">
              {tag}
            </Tag>
          ))}
      </div>
      <Heading size="xlarge" spacing>
        {title}
      </Heading>
      <PortableText value={description} />
      <Img
        {...imageProps}
        layout="responsive"
        sizes="(max-width: 1000px) 10vw, 1000px"
      />
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
      image,
      description,
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
