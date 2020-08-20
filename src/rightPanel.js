import React from "react";
import Languages from "./languages";
import Skills from "./skills";
import ContactInfo from "./contactInfo";

const RightPanel = () => {
  return (
    <div className="col-md-3 offset-md-1">
      <ContactInfo />
      <Skills />
      <Languages />
    </div>
  );
};

export default RightPanel;
