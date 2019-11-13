import React, { Component } from "react";

class Quote extends Component {
  state = {
    numLikes: 0
  };

  incrementLike = () => {
    this.setState({ numLikes: this.state.numLikes + 1 });
  };

  render() {
    return (
      <blockquote>
        <h2>{this.props.quote}</h2>
        <h3>{this.props.author}</h3>
        <h3>{this.state.numLikes} people liked this </h3>
        <button onClick={this.incrementLike}>👍</button>
      </blockquote>
    );
  }
}

export default Quote;
