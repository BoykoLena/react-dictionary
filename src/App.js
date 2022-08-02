import "./App.css";
import { useState } from "react";
import Dictionary from "./Dictionary";
import axios from "axios";

function App() {
  const [keyWord, setKeyWord] = useState("");
  const [response, setResponse] = useState(null);

  const showResponse = (response) => {
    setResponse(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(showResponse);
  };

  const handleKeyChange = (event) => {
    event.preventDefault();
    setKeyWord(event.target.value);
  };

  if (response != null) {
    return (
      <div className="App mt-5">
        <Dictionary
          response={response}
          handleKeyChange={handleKeyChange}
          search={search}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="text-center itd-header">
          What word do you want to look up?
        </h1>
        <form
          className="d-flex justify-content-center align-items-end"
          onSubmit={search}
        >
          <input
            className="itd-input"
            type="text"
            placeholder="search word..."
            onChange={handleKeyChange}
          ></input>
          <button className="itd-button">
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default App;
