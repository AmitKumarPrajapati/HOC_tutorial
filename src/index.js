import React from "react";
import ReactDOM from "react-dom";
import ClickButton from "./ClickButton";
import HoverCounter from "./HoverCounter";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ClickButton />
      <HoverCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
