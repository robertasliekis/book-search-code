import React from "react";
//import $ from "jquery";
import BooksData from "./BooksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksData: [],
      isLoadingBooks: false,
      errorAbout: null,
      errorBooks: null,
      search: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.props.searchInput) {
      this.setState({ search: this.props.searchInput });
      this.fetchData();
    }
  }

  fetchData() {
    this.setState({ isLoadingBooks: true, errorAbout: false, errorBooks: false });

    let searchInputText = this.props.searchInput;

    const dataUrlBooks = `https://www.googleapis.com/books/v1/volumes?q=${searchInputText}`;
    if (searchInputText !== "") {
      fetch(dataUrlBooks)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("Something went wrong ...");
          }
        })
        .then((data) => {
          this.setState({ booksData: data.items, isLoadingBooks: false });
        })
        .catch((errorAbout) => this.setState({ errorAbout, isLoadingBooks: false }));
    }
  }

  render() {
    const { booksData, isLoadingBooks, errorAbout, errorBooks } = this.state;

    if (errorAbout) {
      return (
        <div className="data-info-text">
          <div className="message-text">Book {this.props.searchInput} does not exist . . .</div>
          <FontAwesomeIcon className="icon icon-exclamation" icon={faExclamation} />
        </div>
      );
    }

    if (errorBooks) {
      return <div className="data-info-text">{errorBooks.message}</div>;
    }

    if (isLoadingBooks) {
      return (
        <div className="data-info-text">
          <div className="message-text">Loading Books</div>
          <FontAwesomeIcon className="icon" icon={faSpinner} />
        </div>
      );
    }

    return (
      <div className="main-content-container">
        {booksData.length > 0 ? <BooksData booksData={booksData} searchInput={this.props.searchInput} /> : <div className="data-info-text">Loading Books</div>}
      </div>
    );
  }
}
//}

export default MainContent;
