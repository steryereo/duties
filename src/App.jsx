import React, { useEffect, useState } from "react";

import * as styles from "./styles";

import getInitialData from "./getInitialData";
import shuffleNames from "./shuffleNames";

const SIXTY_FPS_DELAY = 17;
const MAX_DELAY = 600;
const DELAY_COEFFICIENT = 1.15;

function App() {
  const [duties, setDuties] = useState(null);
  const [people, setPeople] = useState(null);

  const [delay, setDelay] = useState(SIXTY_FPS_DELAY);

  const [isSpinning, setIsSpinning] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const initData = getInitialData();
    setDuties(initData.duties);
    setPeople(initData.people);
  }, []);

  useEffect(() => {
    if (!isSpinning) return;

    if (delay > MAX_DELAY) {
      setIsSpinning(false);
      setIsDone(true);
      setDelay(SIXTY_FPS_DELAY);

      return;
    }

    const newDelay = delay * DELAY_COEFFICIENT;

    setTimeout(() => {
      setPeople((p) => shuffleNames(p));
      setDelay(newDelay);
    }, newDelay);
  }, [delay, isSpinning]);

  function spinTheWheel() {
    setIsSpinning(true);
    setIsDone(false);
  }

  if (!duties) return null;

  return (
    <div css={styles.wrapper}>
      <section css={styles.card}>
        <ul css={styles.list}>
          {duties.map((duty, i) => (
            <li css={styles.dutyItem} key={duty}>
              <span css={styles.dutyLabel}>{duty}:</span>
              <span css={[styles.person, isDone ? styles.chosen : null]}>
                {people[i]}
              </span>
            </li>
          ))}
        </ul>
        <div css={styles.buttons}>
          <button
            css={styles.button}
            disabled={isSpinning}
            type="button"
            onClick={spinTheWheel}
          >
            Randomize!
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
