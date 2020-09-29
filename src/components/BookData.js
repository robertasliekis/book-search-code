import React from "react";

class bookData extends React.Component {
  render() {
    let bookAboutData = this.props.bookAboutData;
    return (
      <div className="book-info-wrapper book-wrapper">
        <h1 className="container-title">Character</h1>
        <div className="book-info-container">
          <div className="book-image" style={{ backgroundImage: `url(${bookAboutData.thumbnail.path}.${bookAboutData.thumbnail.extension})` }}></div>

          <div className="book-description">
            <div className="book-name info-div">{bookAboutData.name.toUpperCase()}</div>
            <div className="book-about info-div">{bookAboutData.description}</div>
            <div className="book-books info-div info-numbers">
              <span className="color-text ">books:</span>
              {bookAboutData.books.available}
            </div>
            <div className="book-stories info-div info-numbers">
              <span className="color-text">Stories:</span>
              {bookAboutData.stories.available}
            </div>
            <div className="book-series info-div info-numbers ">
              <span className="color-text">Series:</span>
              {bookAboutData.series.available}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bookData;
