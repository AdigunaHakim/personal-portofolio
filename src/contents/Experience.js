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
          detail="Responsible for research, design and develop REST API microservice of common requirement for banking systems (customer & account verification, mutation etc) 
          and integrate with thrid party (CRM, ECM, Datalake, Kafka & API Gateway). Build ocr (optical character recognition) engine for citizen identity card. Build pipeline CI/CD Config (Git, Jenkins, Nexus, Openshift).
          Maintain quality and product delivery, also code review, refractor & groom with developer."
          tech="Java | SpringBoot | Angular | Kafka | Redis | MySQL | Tesseract | Apache | Phoenix | Hadoop | HBase | Elastic | Logstash | Kibana | Openshift | CICD"
        />
        <Widecard
          title="Software Engineer | Fullstack Developer"
          where="PT Bank Tabungan Pensiun Nasional | Jakarta, Indonesia"
          from="Feb 2019"
          to="Aug 2019"
          detail="Responsible as a fullstack developer to build website & microservice of consolidation report system (portofolio & mutation) for priority customers.
          Build pipeline CI/CD Config (Git, Jenkins, Nexus, Openshift).
          Build engine scheduler for generate report & handle ETL from datalake & integrate with notification systems."
          tech="Java | SpringBoot | NodeJS | React | GraphQL | Jasper | Kafka | Redis | MySQL | HBase | Elastic | Logstash | Kibana | Openshift | CICD"
        />
        <Widecard
          title="Software Engineer | Backend Developer"
          where="PT Aero System Indonesia | Tangerang, Indonesia"
          from="Mar 2018"
          to="Feb 2019"
          detail="Responsible for backend REST API microservice development for enterprise business & management resource planning (Workforce Management System).
          Build engine to dispatch employee schedule & load management."
          tech="Java | SpringBoot | Postgres | NginX | Firebase"
        />
        <Widecard
          title="Radio Network Optimization Engineer | 4G/4.5G"
          where="PT Telkominfra | Surabaya, Indonesia"
          from="Feb 2017"
          to="Mar 2018"
          detail="Develop web base system for report & monitoring quality perfomance prelaunch BTS (Base Transmision System). 
          Maitenance & optimization Key Performance Index Predefine Baseline (Accesabillity, Retainabillity, Mobility & Integrity) for 2G,3G & 4G system.
          Redemensiong capacity issue, clossing predefine badspot and handling VIP complaint. Escalation hardware/transmission problem (Huawei Equipment)."
          tech="PHP | Codeigniter | Apache | Python | MySQL | MsAccess | U2000 | Firebase"
        />
        <Widecard
          title="Operation Support Engineer"
          where="PT Lintas Media Telekomunikasi | Jakarta, Indonesia"
          from="Jan 2016"
          to="Jan 2017"
          detail="Develop web base system for reporting result customer experience and monitoring network operational. 
          Provide daily KPI from BSC/RNC/Cluster. Provide daily CFGMML report (Parameter Dump) 2G, 3G & 4G."
          tech="PHP | Codeigniter | Apache | Python | MySQL | MsAccess | U2000"
        />
        <Widecard
          title="Freelance Developer"
          where="PT Rakha Jaya Putera | Surabaya, Indonesia"
          from="Aug 2014"
          to="Des 2015"
          detail="Develop a company profile website. Develop Web & Mobile Apps for attendance system. Migrate database legacy from SQL Server into MySQL for ERP System."
          tech="HTML | CSS | JQuery | Android | MySQL | SQLServer"
        />
      </div>
    );
  }
}

export default Experience;
