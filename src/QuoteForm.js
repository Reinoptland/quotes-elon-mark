import React, { Component } from "react";

// Todo
// X make form
// X prevent form from refreshing the page
// - get input from the form
// - create a new quote
// - display the new quote

class QuoteForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="author">Author</label>
        <input name="author" />
        <label for="quote">Quote</label>
        <input name="quote" />
        <input type="submit" />
      </form>
    );
  }
}

export default QuoteForm;
