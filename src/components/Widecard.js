import React, { Component } from "react";

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <p class="secondtext">{this.props.where}</p>
          <p class="thridtext">
            {this.props.from} - {this.props.to}
          </p>
        </div>
      </div>
    );
  }
}

export default Widecard;
