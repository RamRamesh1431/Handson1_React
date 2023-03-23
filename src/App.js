import { useState } from "react";
import "./App.css";
import ClassComp from "./components/ClassComp";
import FunctionComp from "./components/FunctionComp";

function App() {
  let [functionBox, setFunctionBox] = useState(false);
  let [classBox, setClassBox] = useState(false);
  function functionHandler() {
    setFunctionBox(!functionBox);
  }
  function classHandler() {
    setClassBox(!classBox);
  }
  return (
    <div className="app">
      <h1 className="heading">Styling using Functional and Class Components</h1>
      <div className="app_maincontainer">
        <div className="functionBox">
          <button onClick={functionHandler}>
            To see styling in functional component
          </button>
          {functionBox && <FunctionComp />}
        </div>
        <div className="classBox">
          <button onClick={classHandler}>
            To see styling in class component
          </button>
          {classBox && <ClassComp />}
        </div>
      </div>
    </div>
  );
}

export default App;
