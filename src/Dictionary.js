import "./Dictionary.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import Pronounce from "./Pronounce";

function Dictionary(props) {
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
          <div>
            <Pronounce audio={props.response.phonetics[0].audio} />
            <Phonetic phonetic={props.response.phonetic} />
          </div>
        </div>

        <Meaning response={props.response.meanings} />
        <Photos photos={props.photos} />
      </div>
    </div>
  );
}

export default Dictionary;
