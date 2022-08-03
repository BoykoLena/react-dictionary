function Pronounce(props) {
  if (props.audio.length > 0 && props.audio[0].audio !== "") {
    return (
      <a href={props.audio[0].audio} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-volume-high"></i>
      </a>
    );
  } else {
    return null;
  }
}

export default Pronounce;
