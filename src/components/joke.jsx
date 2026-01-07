import { useState } from "react";

export default function Joke(props) {
  console.log("Joke component rendered");

  let [isShown, setIsShown] = useState(true);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div className="joke-card">
      {props.setup && <h3 className="joke-setup">Setup: {props.setup}</h3>}

      {isShown && <p className="joke-punchline">{props.punchline}</p>}

      <hr className="joke-divider" />

      <button className="joke-button" onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
    </div>
  );
}
