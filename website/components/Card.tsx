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
  _updatedAt: String;
  title: String;
  description: Array<string>;
  name: String;
  slug: ISlug;
  tags?: string[];
  state: String;
  votes: Array<string>;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, _updatedAt, tags, slug, votes, description } = card;

  return (
    <Link href={`/post/${slug.current}`}>
      <a
        tabIndex={0}
        className="flex flex-col text-text p-2 md:h-60 h-40 max-w-md min-w-[28rem] ease-in-out duration-300 
        hover:scale-[1.02] hover:bg-interaction-primary-hover-subtle 
        shadow shadow-card border border-border rounded-lg cursor-pointer m-2 bg-canvas-background-light"
      >
        <Heading className="text-center" spacing level="2" size="medium">
          {title}
        </Heading>
        {/*         <BodyShort className="text-center px-2 line-clamp-4">
          {" "}
          {description}{" "}
        </BodyShort>
 */}{" "}
        <div className="mt-auto flex justify-between p-2">
          <div className="flex flex-row">
            {votes ? votes.length : 0}{" "}
            <LikeFilled color="#005B82" className="ml-1" />
          </div>
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
