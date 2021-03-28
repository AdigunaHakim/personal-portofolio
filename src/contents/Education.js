import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education</h1>
        <Widecard
          title="Bachelor Degree, Technical Information "
          where="Politeknik Elektronika Negeri Surabaya | Surabaya, Indonesia"
          from="2014"
          to="2016"
        />
        <Widecard
          title="Diploma, Informatics Management"
          where="Politeknik Negeri Jember | Jember, Indonesia"
          from="2010"
          to="2013"
        />
      </div>
    );
  }
}

export default Education;
