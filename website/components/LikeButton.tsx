import { Like, LikeFilled } from "@navikt/ds-icons";
import { Loader, Switch } from "@navikt/ds-react";
import { useEffect, useState } from "react";
import registerVote from "../lib/hooks/registerVote";
import removeVote from "../lib/hooks/removeVote";
import client from "../lib/sanity/sanity";

interface IVotingInfo {
  id: string;
  votes?: Array<string>;
}

const LikeButton: React.FC<IVotingInfo> = ({ id, votes }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [likeState, setLikeState] = useState<boolean>();

  useEffect(() => {
    fetch(`/api/auth`).then(async (res) => {
      const json = await res.json();
      if (json?.status === 200) {
        setEmail(json.mail);
        setLikeState(votes.includes(json.mail));
      } else {
        setEmail("lokal@nav.no");
        setLikeState(votes.includes(email));
      }
    });
  }, [email, votes]);

  const useVote = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLikeState(!likeState);
      if (votes && likeState) {
        const index = votes.indexOf(email);
        removeVote(id, index);
      } else {
        registerVote(id, email);
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  if (loading) return <Loader />;

  return (
    <>
      {likeState && (
        <button onClick={useVote}>
          <LikeFilled /> <p> Du har allerede stemt </p>
        </button>
      )}
      {!likeState && (
        <button onClick={useVote}>
          <Like /> <p> Stem her </p>
        </button>
      )}
    </>
  );
};

export default LikeButton;
