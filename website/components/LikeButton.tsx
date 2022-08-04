import LikedSVG from "../public/LikedSVG";
import NotLikedSVG from "../public/NotLikedSVG";
import { Loader } from "@navikt/ds-react";
import { useEffect, useState } from "react";
import toggleVote from "../lib/hooks/toggleVote";

interface IVotingInfo {
  id: string;
  votes?: Array<string>;
}

const LikeButton: React.FC<IVotingInfo> = ({ id, votes }) => {
  const [hasVoted, sethasVoted] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(votes?.length);
  const [loading, setLoading] = useState<boolean>(false);

  const useVote = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (hasVoted) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      toggleVote(id);
      sethasVoted(!hasVoted);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    fetch(`/api/hasVoted`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(async (res) => {
      const voted = await res.json();
      sethasVoted(voted.voted);
    });
  }, [id]);

  if (loading)
    return (
      <div className="w-60 grid grid-rows-1 h-18">
        <Loader className="m-auto" />
      </div>
    );

  return (
    <div className="grid w-60 h-18">
      {hasVoted && (
        <>
          <button className="text-2xl" onClick={useVote}>
            {votes ? likes : 0}
            <LikedSVG className="likedButton mx-auto mt-2 scale-150" />
            <p color="#0067C5" className="m-auto mt-3">
              Stem
            </p>
          </button>
        </>
      )}
      {!hasVoted && (
        <button className="text-2xl" onClick={useVote}>
          {votes ? likes : 0}
          <NotLikedSVG className="mx-auto mt-2 scale-150 fill-black" />
          <p className="m-auto mt-3"> Stem </p>
        </button>
      )}
    </div>
  );
};

export default LikeButton;
