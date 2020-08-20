import React from "react";
import ContactInfo from "./contactInfo";

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="col-md-8">
          <h1>Shubham Pandey</h1>
          <p>
            A competent professional with 6+ years of experience in{" "}
            <strong>Web Designing</strong>.
          </p>
        </div>
        <div className="col-md-3 offset-md-1">
          <ContactInfo />
        </div>
      </div>
    </header>
  );
};
export default Header;
