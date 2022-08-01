import "./Dictionary.css";

function Dictionary() {
  return (
    <div className="Dictionary">
      <header className="mb-5">
        <form className="d-flex align-items-end">
          <input type="text" placeholder="search word..."></input>
          <button>
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </header>
      <div className="Dictionary-result">
        <div className=" d-flex justify-content-between align-items-center">
          <h2>sunset</h2>
          <button>
            <i class="fa-solid fa-volume-high"></i>
            <span className="ms-2">/sʌnsɛt/</span>
          </button>
        </div>
        <section>
          <h5>noun</h5>
          <p>
            the time in the evening when the sun disappears or daylight fades.
          </p>
        </section>
        <section>
          <h5>synonyms</h5>
          <button>twilight</button>
          <button>twilight</button>
          <button>twilight</button>
        </section>
        <section>
          <h5>phrases</h5>
          <p>sunset was still a couple of hours away</p>
        </section>
        <section>
          <h5>image</h5>
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
