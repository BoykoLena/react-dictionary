import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">What word do you want to look up?</h1>
      <form className="d-flex justify-content-center align-items-end">
        <input type="text"></input>
        <button>
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </div>
  );
}

export default App;
