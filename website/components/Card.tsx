import { LikeFilled } from "@navikt/ds-icons";
import { BodyShort, Heading, Tag } from "@navikt/ds-react";
import Link from "next/link";

export type ISlug = {
  _type: String;
  current: String;
};

export interface CardProps {
  card: ICard;
}

export type ICard = {
  _updatedAt: string;
  title: string;
  shortdescription: Array<string>;
  description: Array<string>;
  name: string;
  slug: ISlug;
  tags?: string[];
  status: string;
  votes: Array<string>;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, _updatedAt, tags, slug, votes, shortdescription } = card;

  return (
    <Link href={`/post/${slug.current}`}>
      <li
        aria-label={title}
        tabIndex={0}
        className="flex flex-col text-text p-2 h-60  max-w-md min-w-full md:min-w-[28rem] ease-in-out duration-300 
        hover:scale-[1.02] hover:bg-interaction-primary-hover-subtle 
        shadow-xl border border-gray-400 rounded-lg cursor-pointer mx-auto m-2 bg-canvas-background-light"
      >
        <Heading className="text-center" spacing level="2" size="medium">
          {title}
        </Heading>
        <BodyShort className="text-center px-2 line-clamp-4">
          {shortdescription}
        </BodyShort>
        <div className="mt-auto flex justify-between p-2">
          <div className="flex flex-row">
            <p aria-label={(votes ? votes.length : "0") + " stemmer"}>
              {votes ? votes.length : 0}{" "}
            </p>
            <LikeFilled color="#005B82" className="ml-1" aria-hidden />
          </div>
          <div className="space-x-1">
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => (
                <Tag
                  key={index}
                  variant="info"
                  size="small"
                  aria-label={"Tag: " + tag}
                >
                  {tag}
                </Tag>
              ))}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
