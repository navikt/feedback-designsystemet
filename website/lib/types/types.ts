export type ISlug = {
    _type: String;
    current: String;
  };
  
  export interface CardProps {
    card: ICard;
  }
  
  export type ICard = {
    _updatedAt: string;
    title: string;
    shortdescription: Array<string>;
    description: Array<string>;
    name: string;
    slug: ISlug;
    tags?: string[];
    status: string;
    votes: Array<string>;
  };
  
  export interface IPerson {
    status: number;
    name: string;
    mail?: string;
    ident?: string;
  }

  export interface PostProps {
    posts?: ICard[];
    tags?: Tag[];
  }
  
  export interface Tag {
    title: String;
  }

  export interface CardListProps {
    posts: ICard[];
    category?: String;
    roadmap?: boolean;
  }