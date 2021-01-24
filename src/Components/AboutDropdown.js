import React from "react";
import "./AboutDropdown.scss";

const AboutDropdown = ({ setaboutmodal }) => {
  return (
    <div
      className="AboutDropdown"
      onMouseLeave={() => {
        setaboutmodal(false);
      }}>
      <div className="leftAbout">
        <h1 className="leftabouthead">About DUDA</h1>
        <hr />
        <h2 className="leftAboutitems">
          <i className="fas fa-chevron-right fa-xs"></i> Our Team
        </h2>
        <h2 className="leftAboutitems">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> Our Legacy
        </h2>
      </div>
      <div className="righthAbout">
        <h1 className="rightAbouthead">Working at DUDA</h1>
        <hr />
        <h2 className="rightAboutitem">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> Scope of Operations
        </h2>
        <h2 className="rightAboutitem">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> Work/Life Balance
        </h2>
        <h2 className="rightAboutitem">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> Compensation & Benefits
        </h2>
        <h2 className="rightAboutitem">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> How to Apply
        </h2>
        <h2 className="rightAboutitem">
          {" "}
          <i className="fas fa-chevron-right fa-xs"></i> Job Search
        </h2>
      </div>
    </div>
  );
};

export default AboutDropdown;
