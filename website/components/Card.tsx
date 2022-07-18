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
  tag: string[];
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <>
      <Link href={`/post/${card.slug.current}`}>
        <Panel border={true}>
          <Heading spacing level="2" size="large">
            {card.name}
          </Heading>
          <BodyLong>{card.textfield}</BodyLong>
        </Panel>
      </Link>
    </>
  );
};

export default Card;
