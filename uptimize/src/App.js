import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from "react-scroll-parallax";
import Routes from './router';


function App() {
  return (
    // <ParallaxProvider>
      <Routes />
    // </ParallaxProvider>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
