function Phonetic(props) {
  if (props.phonetic !== undefined) {
    return <span className="ms-2">{props.phonetic}</span>;
  } else {
    return null;
  }
}

export default Phonetic;
