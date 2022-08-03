import "./App.css";
import { useState } from "react";
import Dictionary from "./Dictionary";
import axios from "axios";

function App() {
  const [keyWord, setKeyWord] = useState("");
  const [response, setResponse] = useState(null);
  const [photos, setPhotos] = useState([]);

  const showResponse = (response) => {
    setResponse(response.data[0]);
  };

  const pexelResponse = (response) => {
    setPhotos(response.data.photos);
  };

  const search = (event) => {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios
      .get(url)
      .then(showResponse)
      .catch(function (error) {
        if (error.response) {
          alert(
            "Sorry, we couldn't find definitions for the word you were looking for, You can try the search again with another word"
          );
        } else {
          console.log("Error", error.message);
        }
      });

    setPhotos([]);
    const apiKey = "563492ad6f917000010000011e60210cfb6a4e74a914717ee77b28f9";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=15`;
    let headers = { Authorization: `${apiKey}` };
    axios.get(pexelUrl, { headers: headers }).then(pexelResponse);
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
          photos={photos}
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
