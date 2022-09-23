import React, { useEffect, useState } from "react";

import getInitialData from "./getInitialData";
import shuffle from "./shuffle";

const SIXTY_FPS_DELAY = 17;
const MAX_DELAY = 750;
const DELAY_COEFFICIENT = 1.15;

function App() {
  const [initState, setInitState] = useState({});
  const [people, setPeople] = useState({});

  const [delay, setDelay] = useState(SIXTY_FPS_DELAY)

  const [spinning, setSpinning] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const initData = getInitialData();
    setInitState(initData);
    setPeople(initData.people);
  }, []);

  useEffect(() => {
    if (!spinning) return;

    if (delay > MAX_DELAY) {
      setSpinning(false);
      setDone(true);
      setDelay(SIXTY_FPS_DELAY);

      return;
    }

    const newDelay = delay * DELAY_COEFFICIENT;

    setTimeout(() => {
      setPeople((p) => shuffle(p));
      setDelay(newDelay);
    }, newDelay);
  }, [delay, spinning]);

  function spinTheWheel() {
    setSpinning(true);
    setDone(false);
  }

  const { duties } = initState;

  if (!duties) return null;

  return (
    <div>
      <ul css={{ listStyle: "none!important" }}>
        {duties.map((duty, i) => (
          <li key={duty}>
            <span>{duty}:</span>
            <span css={{ color: done ? "green" : "black" }}>{people[i]}</span>
          </li>
        ))}
      </ul>
      <button disabled={spinning} type="button" onClick={spinTheWheel}>
        Shuffle!
      </button>
    </div>
  );
}

export default App;
