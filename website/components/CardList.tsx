import client from "../lib/sanity/sanity";
import Card, { ICard } from "../components/Card";

export interface PostProps {
  posts: ICard[];
}

const CardList: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {posts && posts.map((post, index) => <Card key={index} card={post} />)}
    </div>
  );
};

export default CardList;
