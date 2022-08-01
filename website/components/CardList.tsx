import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";

export interface CardProps {
  posts: ICard[];
  category?: String;
  filters?: string[];
}

const CardList: React.FC<CardProps> = ({ posts, category, filters }) => {
  if (category)
    return (
      <div className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {posts
          .filter((post) => post.state == category)
          .map((post, index) => (
            <Card key={category + " " + index} card={post} />
          ))}
      </div>
    );

  if (filters && filters.length > 0)
    return (
      <div className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3 ">
        {posts
          .filter((post) =>
            post.tags ? filters.some((f) => post.tags.includes(f)) : false
          )
          .map((post, index) => (
            <Card key={category + " " + index} card={post} />
          ))}
      </div>
    );

  return (
    <div className="grid justify-center mx-auto mt-10 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card key={category + " " + index} card={post} />
      ))}
    </div>
  );
};

export default CardList;
