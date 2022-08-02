function Phrases(props) {
  if (props.example !== undefined) {
    return (
      <div>
        <h5 className="mb-0 mt-2">phrases</h5>
        <p>{props.example}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Phrases;
