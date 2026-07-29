import { Button } from "./Button";
import { useState, useEffect, useRef } from "react";

export default function ButtonArea() {
  function createDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = {
        id: crypto.randomUUID(),
        num: Math.floor(Math.random() * 10),
        isHeld: "false",
      };
    }
    return arr;
  }
  function toggleHold(id) {
    const filtered = dice.map((dice) => {
      if (dice.id == id) {
        return {
          ...dice,
          isHeld: "true",
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
    const filtered = dice.map((dice) => {
      if (dice.isHeld == "false") {
        return {
          ...dice,
          num: Math.floor(Math.random() * 10),
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

  return (
    <section className="playground">
      <div className="button-area">{populatedDice}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </section>
  );
}
