import React from "react";
import "./App.scss";
import Discover from "./components/discover/Discover";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <div className="top-wrapper">
        <Slider />
        <Discover />
      </div>
    </div>
  );
}

export default App;
