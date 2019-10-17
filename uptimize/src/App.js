import React from "react";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from "./router";
import LoadingScreenWrapper from "./components/LoadingScreen/LoadingScreenWrapper";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Screen from "./components/LoadingScreen/Screen";

const animationDuration = '0.8'

function App() {
  return (
    // <LoadingScreenWrapper>
      <ParallaxProvider>
        {/* <LoadingScreen
         loadingScreen={<Screen />}
         timeout="3"
         animationDuration={animationDuration}
         variation="slideOutLeft"
         extendOverflowTimeout="0"
        > */}
          <Routes />
        {/* </LoadingScreen> */}
     </ParallaxProvider>
    //  </LoadingScreenWrapper>
  );
}

export default App;
