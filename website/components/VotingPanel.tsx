import { useState } from "react";

const VotingPanel = () => {
  //Used later when we implement the voting function
  const [vote, setVote] = useState(null);

  return (
    <div className="flex flex-row justify-center space-x-20 m-10 text-center">
      <a className="" href={"/"}>
        {"< Tilbake"}
      </a>

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
