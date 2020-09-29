import React from "react";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let book = this.props.book;
    let index = this.props.index;
    //   console.log(book);

    return (
      <a href={book.volumeInfo.infoLink} className={`book-container book-container${index}`} style={{ animationDelay: `${0.5 + 0.1 * index}s` }}>
        <div
          className={`book-poster book-poster${index}`}
          style={{ backgroundImage: book.volumeInfo.hasOwnProperty("imageLinks") ? `url(${book.volumeInfo.imageLinks.thumbnail})` : null, backgroundPosition: `center` }}
        ></div>
        <div className={`book-info book-info${index}`}>
          <div className={`book-title book-title${index} info-div`}> {book.volumeInfo.title}</div>
          {book.volumeInfo.hasOwnProperty("authors") ? (
            <div className={`book-creators-container book-creators-container${index} info-div`}>
              <span className="color-text">Author: </span> {book.volumeInfo.authors[0]}
            </div>
          ) : null}
          {book.volumeInfo.hasOwnProperty("pageCount") ? (
            <div className={`book-page-count book-page-count${index} info-div`}>
              <span className="color-text">Page Count: </span> {book.volumeInfo.pageCount}
            </div>
          ) : null}
          {book.volumeInfo.hasOwnProperty("publishedDate") ? (
            <div className={`book-publish-date book-publish-date${index} info-div`}>
              <span className="color-text">Publish Date: </span> {book.volumeInfo.publishedDate}
            </div>
          ) : null}
          {book.volumeInfo.hasOwnProperty("description") ? (
            <div className={`book-description book-description${index} info-div`}>
              <span className="color-text">Description: </span> {book.volumeInfo.description}
            </div>
          ) : null}
        </div>
      </a>
    );
  }
}

export default Book;
