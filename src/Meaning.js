import Phrases from "./Phrases";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <section>
      {props.response.map((mean, index) => {
        return (
          <div key={index} className="mb-5">
            <div className="mb-2 itd-color-orange">{mean.partOfSpeech}</div>
            <h5 className="mb-0">definition</h5>
            <p className="mb-2">{mean.definitions[0].definition}</p>
            <Synonyms synonyms={mean.synonyms} />
            <Phrases example={mean.definitions[0].example} />
          </div>
        );
      })}
    </section>
  );
}

export default Meaning;
