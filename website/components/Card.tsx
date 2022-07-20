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
  textfield: String;
  name: String;
  slug: ISlug;
  tags?: string[];
};

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, _updatedAt, tags, textfield } = card;
  return (
    <div>
      <Link href={`/post/${card.slug.current}`}>
        <div
          className="p-2 h-60 ease-in-out duration-300 hover:scale-[1.02] hover:bg-interaction-primary-hover-subtle 
        rounded-lg border cursor-pointer m-2 border-border"
        >
          <Heading className="text-center" spacing level="2" size="large">
            {title}
          </Heading>
          <BodyShort className="pl-2 line-clamp-4"> {textfield} </BodyShort>
          <BodyShort className="pl-2 pt-1" size="small">
            Publisert: {_updatedAt.slice(0, 10)}
          </BodyShort>
          <div className="space-x-1 text-right">
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => (
                <Tag key="index" variant="info" size="small">
                  #{tag}
                </Tag>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
