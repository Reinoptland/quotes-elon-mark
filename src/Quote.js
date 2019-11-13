import React, { Component } from "react";

class Quote extends Component {
  handleClick = () => {
    this.props.incrementLike(this.props.id);
  };

  render() {
    return (
      <blockquote>
        <h2>{this.props.quote}</h2>
        <h3>{this.props.author}</h3>
        <h3>{this.props.numLikes} people liked this </h3>
        <button onClick={this.handleClick}>👍</button>
      </blockquote>
    );
  }
}

export default Quote;
