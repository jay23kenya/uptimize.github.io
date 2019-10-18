import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import Problem from "../../components/Problem/Problem";
import Nav from "../../components/Nav/Nav";
import wavyBackground from "../../images/wavy-bg.svg";
import FewWords from "../../components/FewWords/FewWords";
import Packages from "../../components/Packages/Packages";
import Footer from "../../components/Footer/Footer";
import Teams from "../../components/Teams/Teams";
import CallToAction from "../../components/CallToAction/CallToAction";
import "./style.css";
import Services from "../../components/Services/Services";

const mainStyle = {
  primaryColor: {
    color: "#03fc7f"
  },
  secondaryColor: {
    color: "#02bd5f"
  },
  header: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontSize: "46px",
    fontWeight: "700"
  },
  subHeader: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "0px"
  },
  text: {
    color: "black",
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontSize: "18px",
    fontWeight: 400
  },
  button: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontWeight: 700
  },
  buttonColor: {
    color: "#03fc7f",
    hoverColor: "#02bd5f"
  },
  bigButton: {
    fontSize: "21px",
    padding: "14px 36px"
  },
  alternateBackgroundColor: {
    backgroundColor: "#eff2f6" //"#f7f9fc"
  },
  section: {
    paddingTop: "75px",
    paddingBottom: "75px"
  },
  wavyDiv: {
    backgroundColor: "white",
    backgroundImage: `url(${wavyBackground})`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 11
  }
};

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Hero mainStyle={mainStyle} />
        <div style={{ height: "100vh", maxWidth: "100%", zIndex: -9 }} />
        <div style={{ zIndex: 10 }}>
          <Nav mainStyle={mainStyle} />
          <div style={{ position: "relative", backgroundColor: "white" }}>
            <Problem mainStyle={mainStyle} />
            <CallToAction mainStyle={mainStyle} />
            <Services mainStyle={mainStyle} />

            <div id="wavyDiv">
              <FewWords mainStyle={mainStyle} />
              <Packages mainStyle={mainStyle} />
            </div>

            <Teams mainStyle={mainStyle} />
            {/* Download */}
            {/* Other views */}
            {/* <FAQ mainStyle={mainStyle} />
            <Contact mainStyle={mainStyle} /> */}
            {/* <div
            style={{
              height: "1000px",
              width: "100%",
              backgroundColor: "white"
            }}
          /> */}
          </div>
          <Footer mainStyle={mainStyle} />
          {/* <PostFooter mainStyle={mainStyle} /> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
