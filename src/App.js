import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

// Quotes liken
// Quotes filteren

class App extends Component {
  state = {
    quotes: [
      {
        id: 1,
        author: "Mark Zuckerberg",
        quote: "Move fast and break things",
        numLikes: 6
      },
      {
        id: 2,
        author: "Mark Zuckerberg",
        quote: "Move fast with stable infrastructure",
        numLikes: 2
      },
      {
        id: 3,
        author: "Elon Musk",
        quote: "Always reason from first principles",
        numLikes: 2
      },
      { id: 4, author: "Mark Zuckerberg", quote: "For Treebeard", numLikes: 3 }
    ]
  };

  // define callback
  incrementLike = id => {
    // console.log("I liked the quote with id: " + id);

    // let quotes = this.state.quotes;

    // for (let index = 0; index < quotes.length; index++) {
    //   const quote = quotes[index];
    //   if (quote.id === id) {
    //     quote.numLikes = quote.numLikes + 1;
    //   }
    // }

    // this.setState({ quotes: quotes });
    // const quotes = this.state.quotes.map(quote => {
    //   if (quote.id === id) {
    //     return { ...quote, numLikes: quote.numLikes + 1 };
    //   }

    //   return quote;
    // });

    const quotes = this.state.quotes.map(quote =>
      quote.id === id ? { ...quote, numLikes: quote.numLikes + 1 } : quote
    );

    this.setState({ quotes: quotes });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.quotes
            .sort((quote1, quote2) => quote2.numLikes - quote1.numLikes)
            .map(quote => {
              return (
                <Quote
                  key={quote.id}
                  id={quote.id}
                  author={quote.author}
                  quote={quote.quote}
                  numLikes={quote.numLikes}
                  // pass callback down to Quote as a prop
                  incrementLike={this.incrementLike}
                />
              );
            })}
        </header>
      </div>
    );
  }
}

export default App;
