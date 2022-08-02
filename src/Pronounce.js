function Pronounce(props) {
  //   console.log(props.audio);
  if (props.audio !== "") {
    return (
      <a href={props.audio} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-volume-high"></i>
      </a>
    );
  } else {
    return null;
  }
}

export default Pronounce;
