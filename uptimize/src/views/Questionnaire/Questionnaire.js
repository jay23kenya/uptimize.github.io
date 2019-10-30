import React from "react";
import { mainStyle } from "../LandingPage/LandingPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Questions from "../../components/Questions/Questions";
const styles = {};

const Questionnaire = () => {
  return (
    <div>
      <Header mainStyle={mainStyle}/>
      <div style={{ height: "20vh", maxWidth: "100%", zIndex: -9 }} />
      <Questions mainStyle={mainStyle} />
      {/* <Footer mainStyle={mainStyle} /> */}
    </div>
  );
};

export default Questionnaire;
