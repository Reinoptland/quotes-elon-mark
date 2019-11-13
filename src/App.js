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
      { id: 4, author: "Elon Musk", quote: "For Treebeard", numLikes: 3 }
    ],

    filter: {
      author: "all"
    }
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

  changeFilter = author => {
    this.setState({
      filter: {
        author: author
      }
    });
  };

  renderQuotes() {
    const {
      quotes,
      filter: { author }
    } = this.state;

    return quotes
      .filter(quote => {
        if (author === "all") {
          return true;
        } else if (author === quote.author) {
          return true;
        } else {
          return false;
        }
      })
      .sort((quote1, quote2) => quote2.numLikes - quote1.numLikes)
      .map(quote => {
        const { id, author, numLikes } = quote;
        return (
          <Quote
            key={id}
            id={id}
            author={author}
            quote={quote.quote}
            numLikes={numLikes}
            // pass callback down to Quote as a prop
            incrementLike={this.incrementLike}
          />
        );
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() => {
              this.changeFilter("Elon Musk");
            }}
          >
            <img
              height="200px"
              src="https://image.businessinsider.com/5db1c746dee0192ce42bd6f7?width=1100&format=jpeg&auto=webp"
            />
          </button>
          <button
            onClick={() => {
              this.changeFilter("Mark Zuckerberg");
            }}
          >
            <img
              height="200px"
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/31/21/mark-zuck.jpg?w968h681"
            />
          </button>

          {this.renderQuotes()}
        </header>
      </div>
    );
  }
}

export default App;
