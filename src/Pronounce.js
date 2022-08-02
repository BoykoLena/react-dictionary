function Pronounce(props) {
  console.log(props.audio);
  if (props.audio !== "") {
    return (
      <button>
        <i className="fa-solid fa-volume-high"></i>
      </button>
    );
  } else {
    return null;
  }
}

export default Pronounce;
