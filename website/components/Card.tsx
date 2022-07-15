import { BodyLong, Heading, Panel } from "@navikt/ds-react";

export type ISlug = {
  _type: String;
  current: String;
};
export interface CardProps {
  card: ICard;
}

export type ICard = {
  date: String;
  title: String;
  textfield: String;
  name: String;
  slug: ISlug;
};

const Card: React.FC<CardProps> = ({ card }) => {
  console.log(Card);
  return (
    <>
      <Panel border={true}>
        <Heading spacing level="2" size="large">
          {card.name}
        </Heading>
        <BodyLong>{card.textfield}</BodyLong>
      </Panel>
    </>
  );
};

export default Card;
