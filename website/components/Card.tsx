import { Heading } from "@navikt/ds-react";
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
  const { title, _updatedAt, tags } = card;
  return (
    <div>
      <Link href={`/post/${card.slug.current}`}>
        <div className="ease-in-out duration-300 hover:scale-[1.02] hover:bg-interaction-primary-hover-subtle rounded-lg border cursor-pointer m-2 border-border">
          <Heading className="text-center" spacing level="2" size="large">
            {title}
          </Heading>
          <h2>
            Tags: {tags && tags.length > 0 && tags.map((tag) => <p>{tag}</p>)}
          </h2>
          <p>Publisert: {_updatedAt.slice(0, 10)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
