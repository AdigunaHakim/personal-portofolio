import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/naaficodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://Instagram.com/adigunahakim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/adigunasuryahakim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adiguna-surya-hakim-741357154/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://medium.com/@iadiguna_hakim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium-m"></i>
        </a>
      </div>
    );
  }
}

export default Social;
