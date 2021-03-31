import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/adiguna.jpeg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "I'm a Software Engineer \n and Technology Enthusiast",
            "Let's Explore..",
          ]}
          speed={60}
          eraseDelay={5000}
          staticText={"> Hi, My Name Adiguna."}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
