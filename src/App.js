// import logo from './logo.svg';
import './App.css';
import  ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import StateComponent from './StateComponent';
import React from "react";
// let s1 = {
//   backgroundColor: "green",
//   color : "white"
// }

function App() {
  return (
    <div>
      {/* <h1 className="heading1">This is App Component</h1>
      <h1 style={{ backgroundColor : "black", color: "white"}}>This is Another Component</h1> */}
      <FunctionalComponent  name="Shaik" place="Chennai"> This is Functional Component</FunctionalComponent>
      {/* <FunctionalComponent  name="Sameer" place="Hyderabad"/> */}
      <ClassComponent />
      <StateComponent />
    </div>

  );
}

export default App;
