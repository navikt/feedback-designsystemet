import { BodyLong, Heading, Panel } from "@navikt/ds-react";
import Link from "next/link";
import client from "../lib/sanity";

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
        <div className=" h-50 w-50 ease-in-out duration-300 scale-100 hover:scale-125 hover:bg-blue-300 rounded-lg border cursor-pointer m-7 border-black">
          <Heading className="text-center" spacing level="2" size="large">
            {title}
          </Heading>
          {console.log(card)}
          <h2>
            {tags && tags.length > 0 && tags.map((tag) => <p>Tags: {tag}</p>)}
          </h2>
          <p>Publisert: {_updatedAt.slice(0, 10)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
