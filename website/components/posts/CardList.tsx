import Card from "./Card";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import client from "../../lib/sanity";
import { useEffect, useState } from "react";

export interface IPost {
  name: String;
  title: String;
  textfield: String;
  attachments?: any;
  date: Date;
}

const CardList: React.FC<IPost[]> = (Post: IPost[]) => {
  const [posts, setPosts] = useState<IPost[]>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>{posts && posts.map((post, index) => <Card key={index} Post={post} />)}</>
  );
};

export default CardList;
