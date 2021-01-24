import React from "react";
import "./DiverOps.scss";

const DiverOps = ({ setdivermodal }) => {
  return (
    <div
      className="diverOps"
      onMouseLeave={() => {
        setdivermodal(false);
      }}>
      <h1 className="diversheader">DIVERSIFIED OPERATION</h1>
      <hr />
      <h2 className="diveritems">DUDA FARM FRESH FOODS</h2>
      <h2 className="diveritems">THE VIERA COMPANY</h2>
      <h2 className="diveritems">DUDA RANCHES</h2>
      <h2 className="diveritems">COMMERCIAL PROPERTIES</h2>
    </div>
  );
};

export default DiverOps;
