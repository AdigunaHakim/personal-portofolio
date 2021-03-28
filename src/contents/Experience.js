import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Experience extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Experience</h1>
        <Widecard
          title="Technical Lead of IT Common Service Enablement"
          where="PT Bank Tabungan Pensiun Nasional | Jakarta, Indonesia"
          from="Aug 2019"
          to="Present"
        />
        <Widecard
          title="Software Engineer | Fullstack Developer"
          where="PT Bank Tabungan Pensiun Nasional | Jakarta, Indonesia"
          from="Feb 2019"
          to="Aug 2019"
        />
        <Widecard
          title="Software Engineer | Backend Developer"
          where="PT Aero System Indonesia | Tangerang, Indonesia"
          from="Mar 2018"
          to="Feb 2019"
        />
        <Widecard
          title="Radio Network Optimization Engineer | 4G/4.5G"
          where="PT Telkominfra | Surabaya, Indonesia"
          from="Feb 2017"
          to="Mar 2018"
        />
        <Widecard
          title="Operation Support Engineer"
          where="PT Lintas Media Telekomunikasi | Jakarta, Indonesia"
          from="Jan 2016"
          to="Jan 2017"
        />
      </div>
    );
  }
}

export default Experience;
