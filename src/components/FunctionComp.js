import React from "react";
import "./FunctionComp.css";
function FunctionComp() {
  return (
    <div className="main1">
      <h1>This is created using Functional Component</h1>
      <p>this done using external CSS</p>
      <p style={{ color: "blue" }}>this done using inline CSS</p>
    </div>
  );
}

export default FunctionComp;
