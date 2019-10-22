import React from "react";
import { mainStyle } from "../LandingPage/LandingPage";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Questions from "../../components/Questions/Questions";
const styles = {};

const Questionnaire = () => {
  return (
    <div>
      <Questions mainStyle={mainStyle} />
    </div>
  );
};

export default Questionnaire;
