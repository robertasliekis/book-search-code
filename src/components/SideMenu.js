import React from "react";
import { Component } from "react";
import BookListItem from "./BookListItem";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.bookNameInputValue = this.bookNameInputValue.bind(this);
  }

  bookNameInputValue(val1, val2) {
    this.props.bookNameInput(val1, val2);
    this.props.bookButtonClicked(val2);
  }

  render() {
    var sideMenuClassName = this.props.burgerMenuInput ? "side-menu-open" : null;
    const bookList = [
      "adventure",
      "horror",
      "science",
      "FICTION",
      "PHILOSOPHY ",
      "MUSIC",
      "DRAMA",
      "RELIGION",
      "SELF-HELP",
      "TRAVEL",
      "MATH",
      "ART",
      "ARCHITECTURE",
      "EDUCATION",
      "HISTORY",
      "LAW",
      "HUMOR",
      "COOKING",
      "DESIGN",
      "COMPUTERS",
      "PETS",
      "HEALTH"
    ];

    return (
      <div className={"side-menu " + sideMenuClassName}>
        <h1 className="category-name">CATEGORIES</h1>
        <div className="category-list">
          {bookList.map((book, index) => {
            return <BookListItem key={"bookKey" + index} bookName={book} bookNameInput={this.bookNameInputValue} />;
          })}
        </div>
      </div>
    );
  }
}

export default SideMenu;
