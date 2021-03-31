import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCount = event => {
    this.setState({ message: event.target.value })
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleCount}
          type="text" 
          // name="message" 
          // id="message"
          value={this.state.message} 
        />
        <small>{charCount}</small>
      </div>
    );
  }
}

export default TwitterMessage;
