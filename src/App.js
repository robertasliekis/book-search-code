import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      burgerInputValue: false,
      windowWidth: 0,
      windowHeight: 0
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleBurgerInputValue = this.handleBurgerInputValue.bind(this);
    this.bookNameInputValue = this.bookNameInputValue.bind(this);
    this.bookButtonClickedValue = this.bookButtonClickedValue.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  };

  handleInputValue(val) {
    this.setState({ inputValue: val });
  }

  handleBurgerInputValue(val) {
    this.setState({ burgerInputValue: val });
    console.log("gaasdasd");
  }

  bookNameInputValue(val) {
    this.setState({ inputValue: "subject:" + val });
  }

  bookButtonClickedValue(val) {
    this.setState({ burgerInputValue: val });
  }

  render() {
    return (
      <div className="website-wrapper">
        <Header handleInput={this.handleInputValue} handleBurgerInput={this.handleBurgerInputValue} burgerInputValue={this.state.burgerInputValue} />
        <SideMenu burgerMenuInput={this.state.burgerInputValue} bookNameInput={this.bookNameInputValue} bookButtonClicked={this.bookButtonClickedValue} />
        {this.state.inputValue !== "" ? <MainContent searchInput={this.state.inputValue} /> : null}
      </div>
    );
  }
}

export default App;
