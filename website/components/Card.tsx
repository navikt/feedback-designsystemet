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
  _updatedAt: String;
  title: String;
  description: String;
  name: String;
  slug: ISlug;
  tags?: string[];
  state: String;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, _updatedAt, tags, description } = card;
  return (
    <Link href={`/post/${card.slug.current}`}>
      <a
        tabIndex={0}
        className="flex flex-col text-text p-2 md:h-60 h-40 max-w-md ease-in-out duration-300 
        hover:scale-[1.02] hover:bg-interaction-primary-hover-subtle 
        shadow shadow-card rounded-lg cursor-pointer m-2"
      >
        <Heading className="text-center" spacing level="2" size="medium">
          {title}
        </Heading>
        <BodyShort className="text-center px-2 line-clamp-4">
          {" "}
          {description}{" "}
        </BodyShort>
        <div className="mt-auto flex justify-between">
          <BodyShort className="px-2 pt-1 italic" size="small">
            Publisert: {_updatedAt.slice(0, 10)}
          </BodyShort>
          <div className="space-x-1">
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => (
                <Tag key={index} variant="info" size="small">
                  #{tag}
                </Tag>
              ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
