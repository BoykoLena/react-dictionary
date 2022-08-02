function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <h5 className="mb-0">synonyms</h5>
        <div className="d-flex flex-wrap">
          {props.synonyms.map((synonym, index) => {
            return (
              <div className="synonyms" key={index}>
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
