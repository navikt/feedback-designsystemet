import Card from "./Card";

export interface IPost {
  author: String;
  title: String;
  textBody: String;
  content?: any;
  publishedAt: Date;
  votes: Number;
  state: String;
}

const CardList: React.FC = () => {
  const myCards: IPost[] = [
    {
      author: "Per",
      title: "Test",
      textBody: "Dette er en test",
      content: null,
      publishedAt: new Date(),
      votes: 4,
      state: "Closed",
    },
    {
      author: "Per",
      title: "Test",
      textBody: "Dette er en test",
      content: null,
      publishedAt: new Date(),
      votes: 4,
      state: "Closed",
    },
  ];
  return (
    <>{myCards ? myCards.map((myCard) => <Card Post={myCard} />) : <></>}</>
  );
};

export default CardList;
