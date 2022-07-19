import { BodyLong, Heading, Panel } from "@navikt/ds-react";
import Link from "next/link";

export type ISlug = {
  _type: String;
  current: String;
};

export interface CardProps {
  card: ICard;
}

export type ICard = {
  _updatedAt: Date;
  title: String;
  textfield: String;
  name: String;
  slug: ISlug;
  tag?: string[];
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div>
      <Link href={`/post/${card.slug.current}`}>
        {/*         <div className="ease-in-out duration-300 scale-100 hover:scale-105 hover:bg-feedback-info-background rounded-lg border cursor-pointer m-2 border-border">
          <Heading className="text-center" spacing level="2" size="large">
            {card.title}
          </Heading>
          {console.log(card)}
          <BodyLong>{card.tag ? card.tag[0] : ""}</BodyLong>
        </div>
 */}{" "}
      </Link>
    </div>
  );
};

export default Card;
