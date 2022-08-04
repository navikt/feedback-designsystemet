import { Heading, Tag } from "@navikt/ds-react";
import client from "../../lib/sanity/sanity";
import { PortableText, PortableTextBlockComponent } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import ModalImage from "react-modal-image";
import { ISlug } from "../../components/Card";
import LikeButton from "../../components/LikeButton";
import { Left } from "@navikt/ds-icons";

interface IPost {
  title: String;
  _id: string;
  name: String;
  slug: ISlug;
  textfield: PortableTextBlockComponent;
  images?: any;
  tags?: Array<string>;
  votes?: Array<string>;
}

const Post = ({ post }) => {
  const {
    _id = " ",
    title = "missing title",
    description = ["missing description"],
    images = null,
    figma = "",
    tags = null,
    votes = [],
  } = post;

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="flex flex-col md:max-w-[70vw] min-w-[69vw] min-h-[70vh] mt-20 mb-20 border-2 rounded-md flex-initial mx-auto bg-white max-w-[2200px] p-20">
      <div className="flex flex-row justify-between">
        <a className="border text-text rounded p-2 h-fit" href={"/"}>
          <div className="flex flex-row place-items-center">
            <Left /> Tilbake
          </div>
        </a>
        <LikeButton votes={post.votes} id={post._id} />
      </div>
      <div className="pt-20 pb-4 space-x-1">
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
      <div className="grid sm:grid-cols-2 gap-3 place-items-center pt-10">
        {images &&
          images.length > 0 &&
          images.map((image, key) => (
            <ModalImage
              key={key}
              small={urlFor(image).size(650, 650).url()}
              large={urlFor(image).url()}
              alt={image.alt}
              hideDownload="true"
              className="rounded drop-shadow-md hover:scale-[1.02]"
            />
          ))}
      </div>
      <div>
        {figma && (
          <iframe
            src={figma}
            title="Embedded Figma prototype"
            width="100%"
            height="800"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      images,
      figma,
      description,
      "tags": tags[]->title,
      votes,
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
