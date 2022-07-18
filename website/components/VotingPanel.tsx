import { Button, ToggleGroup } from "@navikt/ds-react";
import { useEffect, useState } from "react";

const VotingPanel = () => {
  const [vote, setVote] = useState(null);

  const handleVote = (x) => {
    setVote(x);
    vote == "forslag" ? "" : "";
  };

  return (
    <div className="flex flex-row justify-center space-x-20 m-10 text-center">
      <p className="mx-10 my-auto">
        Echo Three to Echo Seven, Han, old buddy, do you read me?
      </p>
      <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
        <li className="relative">
          <input
            className="sr-only peer"
            type="radio"
            value="yes"
            name="answer"
            id="answer_yes"
          ></input>
          <label
            className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
            htmlFor="answer_yes"
          >
            Nah
          </label>

          <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            👍
          </div>
        </li>

        <li className="relative">
          <input
            className="sr-only peer"
            type="radio"
            value="no"
            name="answer"
            id="answer_no"
          ></input>
          <label
            className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
            htmlFor="answer_no"
          >
            Si
          </label>

          <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            👎
          </div>
        </li>

        <li className="relative">
          <input
            className="sr-only peer"
            type="radio"
            value="maybe"
            name="answer"
            id="answer_maybe"
          ></input>
          <label
            className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent"
            htmlFor="answer_maybe"
          >
            Siuuuuuu
          </label>

          <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            🤔
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VotingPanel;

{
  /* <div className="flex flex-row justify-center space-x-0 m-10">
<p className="mx-10">
  Echo Three to Echo Seven, Han, old buddy, do you read me?
</p>
<div className="flex w-full justify-center gap-2 sm:gap-6">
  <button className="max-w-[8rem] flex-1 rounded-sm border-2 py-2 focus:border focus:outline-none border-gray-900 bg-gray-900 text-text-inverted  focus:border-white focus:shadow-focus">
    <p className="navds-label">1</p>
  </button>
  <button className="max-w-[8rem] flex-1 rounded-sm border-2 py-2 focus:border focus:outline-none border-border bg-white hover:bg-gray-50 focus:shadow-focus">
    <p className="navds-label">2</p>
  </button>
  <button className="max-w-[8rem] flex-1 rounded-sm border-2 py-2 focus:border focus:outline-none border-gray-900 bg-gray-900 text-text-inverted  focus:border-white focus:shadow-focus">
    <p className="navds-label">3</p>
  </button>
</div>
</div>
 */
}
