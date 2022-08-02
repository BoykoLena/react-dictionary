function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="mb-2 itd-color-orange">image</div>
        <div className="Dictionary-image d-flex flex-wrap justify-content-around">
          {props.photos.map((photo, index) => {
            return (
              <a key={index} href={photo.url} target="_blank" rel="noreferrer">
                <img alt={photo.alt} src={photo.src.small} />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;
