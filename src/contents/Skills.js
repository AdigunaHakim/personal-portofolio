import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        "Java",
        "Javascript",
        "Spring Framework",
        "NodeJS",
        "React",
        "GraphQL",
        "Kafka",
        "Kubernates",
        "Docker",
        "Analysis",
        "Architecture",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <div class="ui segment">
          <b> Agile | CI/CD | TDD </b>
        </div>
      </div>
    );
  }
}

export default Skills;
