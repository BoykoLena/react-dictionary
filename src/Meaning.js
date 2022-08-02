function Meaning(props) {
  return (
    <section>
      {props.response.map((mean, index) => {
        return (
          <div key={index} className="mb-5">
            <div className="mb-2 itd-color-orange">{mean.partOfSpeech}</div>
            <h5 className="mb-0">definition</h5>
            <p className="mb-2">{mean.definitions[0].definition}</p>
            <h5 className="mb-0">synonyms</h5>
            <div className="d-flex flex-wrap">
              {mean.synonyms.map((synonym, index) => {
                return (
                  <div className="synonyms" key={index}>
                    {synonym}
                  </div>
                );
              })}
            </div>
            <h5 className="mb-0 mt-2">phrases</h5>
            <p>{mean.definitions[0].example}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Meaning;
