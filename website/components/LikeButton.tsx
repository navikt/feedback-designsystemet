import LikedSVG from "../public/LikedSVG";
import NotLikedSVG from "../public/NotLikedSVG";
import { Loader } from "@navikt/ds-react";
import { useState } from "react";
import toggleVote from "../lib/hooks/toggleVote";

interface IVotingInfo {
  id: string;
  votes?: Array<string>;
}

const LikeButton: React.FC<IVotingInfo> = ({ id, votes }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [likeState, setLikeState] = useState<boolean>();

  const useVote = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLikeState(!likeState);
      toggleVote(id);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  if (loading)
    return (
      <div className="w-60 grid grid-rows-1 h-18">
        <Loader className="m-auto" />
      </div>
    );

  return (
    <div className="grid w-60 h-18">
      {likeState && (
        <>
          <button className="text-xl" onClick={useVote}>
            {votes ? votes.length : 0}
            <LikedSVG className="likedButton mx-auto mt-2 scale-150" />
            <p color="#0067C5" className="m-auto mt-3">
              Stem
            </p>
          </button>
        </>
      )}
      {!likeState && (
        <button className="text-xl" onClick={useVote}>
          {votes ? votes.length : 0}
          <NotLikedSVG className="mx-auto mt-2 scale-150 fill-black" />
          <p className="m-auto mt-3"> Stem </p>
        </button>
      )}
    </div>
  );
};

export default LikeButton;
