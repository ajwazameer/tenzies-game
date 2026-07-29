export function Button(props) {
  return (
    <button
      id={props.id}
      isheld={props.isHeld}
      onClick={() => props.toggleHold(props.id)}
      className={props.isheld ? "game-button held" : "game-button"}
    >
      {props.num}
    </button>
  );
}
