import React, { Component } from "react";

class BookListItem extends Component {
  listItemClicked(el) {
    let bookName = el.target.innerText;
    let burgerClicked = false;
    this.props.bookNameInput(bookName, burgerClicked);
  }

  render() {
    return (
      <div className="list-item" onClick={(el) => this.listItemClicked(el)}>
        {this.props.bookName.toUpperCase()}
      </div>
    );
  }
}

export default BookListItem;
