import React from "react";
import Book from "./Book";

class BooksData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let booksData = Object.values(this.props.booksData);

    return (
      <div className="books-wrapper">
        <h1 className="container-title">
          {this.props.searchInput.includes("subject:")
            ? this.props.searchInput.substring(8).charAt(0).toUpperCase() + this.props.searchInput.substring(8).toLowerCase().slice(1)
            : this.props.searchInput.charAt(0).toUpperCase() + this.props.searchInput.toLowerCase().slice(1)}{" "}
          books
        </h1>
        <div className="books-container" style={{ height: this.state.containerSize }}>
          {booksData.length !== undefined ? (
            booksData.map((book, index) => {
              return <Book key={index} book={book} index={index}></Book>;
            })
          ) : (
            <div lassName="data-info-text">Loading books...</div>
          )}
        </div>
      </div>
    );
  }
}

export default BooksData;
