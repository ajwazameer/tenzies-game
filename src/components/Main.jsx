import { Button } from "./Button";
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
export default function Main() {
  function createDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = {
        id: crypto.randomUUID(),
        num: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      };
    }
    return arr;
  }
  function toggleHold(id) {
    const filtered = dice.map((dice) => {
      if (dice.id === id) {
        return {
          ...dice,
          isHeld: !dice.isHeld,
        };
      } else {
        return {
          ...dice,
        };
      }
    });
    console.log(filtered);
    setDice(filtered);
  }

  const [dice, setDice] = useState(createDice);

  const populatedDice = dice.map((dice) => (
    <Button
      id={dice.id}
      key={dice.id}
      num={dice.num}
      isHeld={dice.isHeld}
      toggleHold={toggleHold}
    />
  ));

  function rollDice() {
    if (gameWon) {
      setDice(createDice());
    } else {
      const filtered = dice.map((dice) => {
        if (dice.isHeld == false) {
          return {
            ...dice,
            num: Math.floor(Math.random() * 6) + 1,
          };
        } else {
          return {
            ...dice,
          };
        }
      });
      console.log(filtered);
      setDice(filtered);
    }
  }
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.num == dice[0].num);

  const refBtn = useRef(null);
  useEffect(() => {
    if (gameWon) {
      refBtn.current.focus();
      console.log("focused");
    }
  }, [gameWon]);
  let style = {
    backgroundColor: gameWon ? "#fc35ff" : "#5035ff",
  };

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <div className="game-area">
        <h2 className="heading">Tenzies</h2>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <section className="playground">
          <div className="button-area">{populatedDice}</div>
          <button
            style={style}
            className="roll-btn"
            onClick={rollDice}
            ref={refBtn}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </section>
      </div>
    </main>
  );
}
