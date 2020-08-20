import React from "react";
import Objective from "./objective";
import JobProfile from "./jobProfile";
import Projects from "./projects";
import Qualification from "./qualification";
import Experience from "./experience";
import PersonalDetail from "./personalDetail";

const LeftPanel = () => {
  return (
    <div className="col-md-8">
      <Objective />
      <JobProfile />
      <Projects />
      <Qualification />
      <Experience />
      <PersonalDetail />
    </div>
  );
};

export default LeftPanel;
