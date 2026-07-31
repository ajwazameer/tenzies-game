export function Button(props) {
  return (
    <button
      onClick={() => props.toggleHold(props.id)}
      className={props.isHeld ? "game-button held" : "game-button"}
      aria-label={`Die with value ${props.num}, 
            ${props.isHeld ? "held" : "not held"}`}
      aria-pressed={props.isHeld}
    >
      {props.num}
    </button>
  );
}
