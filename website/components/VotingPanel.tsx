import { Tooltip } from "@navikt/ds-react";
import { useState } from "react";

const VotingPanel = () => {
  //Used later when we implement the voting function
  const [vote, setVote] = useState(null);

  const [voteMessage, setVoteMessage] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-center space-x-20 m-10 text-center">
      <a className="" href={"/"}>
        {"< Tilbake"}
      </a>

      <p className="mx-10 my-auto">Hvor viktig er denne endringen for deg?</p>
      <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
        <Tooltip content="Dette ville vært nyttig" placement="bottom">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              onClick={() => setVoteMessage(true)}
              value="yes"
              name="answer"
              id="answer_yes"
            ></input>
            <label
              className="place-content-center flex p-5 bg-white border border-border rounded-lg cursor-pointer focus:outline-none 
            hover:bg-interaction-primary-hover-subtle 
            peer-checked:ring-green-500 peer-checked:bg-green-200 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_yes"
            >
              Litt
            </label>

            {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            🙂
          </div> */}
          </li>
        </Tooltip>
        <Tooltip content="Dette er viktig for meg" placement="bottom">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              onClick={() => setVoteMessage(true)}
              value="no"
              name="answer"
              id="answer_no"
            ></input>
            <label
              className="place-content-center flex p-5 bg-white border border-border rounded-lg cursor-pointer 
            focus:outline-none hover:bg-interaction-primary-hover-subtle 
            peer-checked:ring-orange-500 peer-checked:bg-orange-200 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_no"
            >
              Viktig
            </label>

            {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            👎
          </div> */}
          </li>
        </Tooltip>
        <Tooltip content="Dette er kritisk for meg" placement="bottom">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              onClick={() => setVoteMessage(true)}
              value="maybe"
              name="answer"
              id="answer_maybe"
            ></input>
            <label
              className="place-content-center flex p-5 bg-white border border-border rounded-lg cursor-pointer 
            focus:outline-none hover:bg-interaction-primary-hover-subtle 
            peer-checked:ring-red-500 peer-checked:bg-red-200 peer-checked:ring-2 peer-checked:border-transparent"
              htmlFor="answer_maybe"
            >
              Kritisk
            </label>

            {/* <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            🤔
          </div> */}
          </li>
        </Tooltip>
        {voteMessage && <div>Stemme registrert ✅</div>}
      </ul>
    </div>
  );
};

export default VotingPanel;
