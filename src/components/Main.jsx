import ButtonArea from "./ButtonArea";
export default function Main() {
  return (
    <main>
      <div className="game-area">
        <h2 className="heading">Tenzies</h2>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <ButtonArea />
      </div>
    </main>
  );
}
