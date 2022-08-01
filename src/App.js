import "./App.css";
import { useState } from "react";
import Dictionary from "./Dictionary";

function App() {
  const [word, setWord] = useState(true);

  if (word) {
    return (
      <div className="App mt-5">
        <Dictionary />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="text-center itd-header">
          What word do you want to look up?
        </h1>
        <form className="d-flex justify-content-center align-items-end">
          <input
            className="itd-input"
            type="text"
            placeholder="search word..."
          ></input>
          <button className="itd-button">
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default App;
