import React, { Component } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: [
        {skill:"Java", value:90},
        {skill:"Javascript", value:85},
        {skill:"Spring Framework", value:90},
        {skill:"NodeJS", value:85},
        {skill:"React", value:85},
        {skill:"GraphQL", value:80},
        {skill:"Kafka", value:80},
        {skill:"Kubernates", value:80},
        {skill:"Docker", value:80},
        {skill:"Analysis", value:90},
        {skill:"Architecture", value:90},
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return (
              <li>
                {value.skill}
                <ProgressBar completed={value.value} bgcolor={'#888d8d'}/>
              </li>
            );
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
