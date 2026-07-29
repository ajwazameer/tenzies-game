export function Button(props) {
  return (
    <button
      onClick={() => props.toggleHold(props.id)}
      className={props.isHeld ? "game-button held" : "game-button"}
    >
      {props.num}
    </button>
  );
}
