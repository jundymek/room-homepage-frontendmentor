import React from "react";
import "./App.scss";
import About from "./components/about/About";
import Discover from "./components/discover/Discover";
import Slider from "./components/slider/Slider";
import { SliderProvider } from "./context/slidersContext";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="top-wrapper">
          <SliderProvider>
            <Slider />
            <Discover />
          </SliderProvider>
        </div>
        <About />
      </div>
    </div>
  );
}

export default App;
