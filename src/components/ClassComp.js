import React, { Component } from "react";
import "./ClassComp.css";

export class ClassComp extends Component {
  render() {
    return (
      <div className="main">
        <h1>This is created using Class Component</h1>
        <p>this done using external CSS</p>
        <p style={{ color: "blue" }}>this done using inline CSS</p>
      </div>
    );
  }
}

export default ClassComp;
