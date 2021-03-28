import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Teknik Informatika"
          where="Politeknik Elektronika Negeri Surabaya"
          from="2014"
          to="2016"
        />
        <Widecard
          title="Manajemen Informatika"
          where="Politeknik Negeri Jember"
          from="2010"
          to="2013"
        />
      </div>
    );
  }
}

export default Education;
