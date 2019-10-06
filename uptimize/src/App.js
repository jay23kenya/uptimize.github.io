import React from "react";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from "./router";

function App() {
  return (
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
  );
}

export default App;
