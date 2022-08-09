import Card from "../components/Card";
import { CardListProps } from "../lib/types/types";

const CardList: React.FC<CardListProps> = ({ posts, category, roadmap }) => {
  if (!posts) return <p className="m-auto mt-60">Ingen aktive kort</p>;

  return (
    <ul
      className={
        roadmap === true
          ? "grid list-none justify-center place-content-center mx-auto bg-[#CFCFCF] gap-x-12 gap-y-4 xl:grid-cols-1 xxl:grid-cols-2 xxxl:grid-cols-3"
          : "grid list-none justify-center place-content-center mx-auto mt-10 gap-x-8 gap-y-4 lg:grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 xxxl:grid-cols-4"
      }
    >
      {posts
        .filter((post) => post.status == category)
        .map((post, index) => (
          <li key={index}>
            <Card key={category + " " + index} card={post} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
