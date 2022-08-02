import Card, { ICard } from "../components/Card";

export interface CardProps {
  posts: ICard[];
  category?: String;
  filters?: string[];
}

const CardList: React.FC<CardProps> = ({ posts, category, filters }) => {
  if (!posts) return <p className="m-auto mt-60">Ingen aktive kort</p>;
  return (
    <ul className="grid justify-center place-content-center mx-auto mt-0 gap-y-4 xl:grid-cols-2 2xl:grid-cols-3">
      {posts
        .filter((post) => post.state == category)
        .map((post, index) => (
          <li className="mx-auto" key={index}>
            <Card key={category + " " + index} card={post} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
