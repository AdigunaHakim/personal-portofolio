import React, { Component } from "react";

class Widecard extends Component {
  render() {
    return (
      <div className="widecard">
        <div className="compdet">
          <h3>{this.props.title}</h3>
          <p className="secondtext">{this.props.where}</p>
          <p className="thridtext">
            {this.props.from} - {this.props.to}
          </p>
          <p className="detail">
            {this.props.detail}
          </p>
          <p className="tech">
            {this.props.tech}
          </p>
        </div>
      </div>
    );
  }
}

export default Widecard;
