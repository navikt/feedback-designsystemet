import { Heading, Tag } from "@navikt/ds-react";
import client from "../../lib/sanity/sanity";
import { PortableText, PortableTextBlockComponent } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

interface post {
  title: String;
  name: String;
  textfield: PortableTextBlockComponent;
  images?: any;
  tags?: Array<string>;
}

const Post = ({ post }) => {
  const {
    title = "missing title",
    name = "missing name",
    description = ["missing description"],
    images = null,
    tags = null,
  } = post;

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="flex flex-col mx-auto max-w-2xl pt-10">
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
      <div className="grid sm:grid-cols-2 gap-3 pt-10 mx-auto">
        {images &&
          images.length > 0 &&
          images.map((image, key) => (
            <img
              key={key}
              src={urlFor(image).url()}
              alt={image.alt}
              className="container rounded drop-shadow-md"
            />
          ))}
      </div>
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
      images,
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
