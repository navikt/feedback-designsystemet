import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";

export interface PostProps {
  posts: ICard[];
  category?: String;
}

const CardList: React.FC<PostProps> = ({ posts, category }) => {
  console.log(posts);
  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 ">
      {posts && category
        ? posts
            .filter((post) => post.state == category)
            .map((post, index) => (
              <Card key={category + " " + index} card={post} />
            ))
        : posts.map((post, index) => (
            <Card key={category + " " + index} card={post} />
          ))}
    </div>
  );
};

export default CardList;
