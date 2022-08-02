import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";

export interface CardProps {
  posts: ICard[];
  category?: String;
  filters?: string[];
}

const CardList: React.FC<CardProps> = ({ posts, category, filters }) => {
  if (!posts) return <p className="m-auto mt-60">Ingen aktive kort</p>;

  if (category)
    return (
      <ul className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 xl:grid-cols-2 2xl:grid-cols-3">
        {posts
          .filter((post) => post.state == category)
          .map((post, index) => (
            <li className="mx-auto" key={index}>
              <Card key={category + " " + index} card={post} />
            </li>
          ))}
      </ul>
    );

  if (filters && filters.length > 0)
    return (
      <ul className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
        {posts
          .filter((post) =>
            post.tags ? filters.some((f) => post.tags.includes(f)) : false
          )
          .map((post, index) => (
            <li key={index}>
              <Card key={category + " " + index} card={post} />
            </li>
          ))}
      </ul>
    );

  return (
    <ul className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <li key={index}>
          <Card key={category + " " + index} card={post} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
