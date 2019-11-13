import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

// Quotes liken
// Quotes filteren

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Quote author="Mark Zuckerberg" quote="Move fast and break things" />
          <Quote
            author="Mark Zuckerberg"
            quote="Move fast with stable infrastructure"
          />
          <Quote
            author="Elon Musk"
            quote="Always reason from first principles"
          />
          <Quote author="Elon Musk" quote="For Treebeard" />
        </header>
      </div>
    );
  }
}

export default App;
