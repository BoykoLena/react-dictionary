import "./Dictionary.css";
import Meaning from "./Meaning";

function Dictionary(props) {
  console.log(props.response);
  return (
    <div className="Dictionary">
      <header className="mb-5">
        <form className="d-flex align-items-end" onSubmit={props.search}>
          <input
            type="text"
            placeholder="search word..."
            onChange={props.handleKeyChange}
          ></input>
          <button>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </header>
      <div className="Dictionary-result">
        <div className=" d-flex justify-content-between align-items-center mb-4">
          <h2>{props.response.word}</h2>
          <button>
            <i className="fa-solid fa-volume-high"></i>
            <span className="ms-2">{props.response.phonetic}</span>
          </button>
        </div>

        <Meaning response={props.response.meanings} />

        <section>
          <div className="mb-2">image</div>
          <div className="Dictionary-image d-flex flex-wrap">
            <img
              width={200}
              height={200}
              src="https://www.collinsdictionary.com/images/full/sunset_390537568_1000.jpg"
            />
            <img
              width={200}
              height={200}
              src="https://qph.cf2.quoracdn.net/main-qimg-f3278780568c80d6a95a0d651a73ace4-lq"
            />
            <img
              width={200}
              height={200}
              src="http://wallup.net/wp-content/uploads/2015/12/24214-sky-landscape-sea-city.jpg"
            />
            <img
              width={200}
              height={200}
              src="https://qph.cf2.quoracdn.net/main-qimg-f3278780568c80d6a95a0d651a73ace4-lq"
            />
            <img
              width={200}
              height={200}
              src="http://wallup.net/wp-content/uploads/2015/12/24214-sky-landscape-sea-city.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dictionary;