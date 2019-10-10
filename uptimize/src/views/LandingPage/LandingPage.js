import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import Problem from "../../components/Problem/Problem";
import Nav from "../../components/Nav/Nav";
import wavyBackground from "../../images/wavy-bg.svg";
import FewWords from "../../components/FewWords/FewWords";
import Packages from "../../components/Packages/Packages";
import PostFooter from "../../components/Footer/PostFooter";
import Footer from "../../components/Footer/Footer";

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
    backgroundColor: "#f7f9fc"
  },
  section: {
    paddingTop: "75px",
    paddingBottom: "75px"
  },
  wavyDiv: {
    backgroundImage: `url(${wavyBackground})`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "white"
  }
};

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <Hero mainStyle={mainStyle} />
        <div id="navStick" style={{ zIndex: 10, backgroundImage: "none" }}>
          <Nav mainStyle={mainStyle} setNavDiv={this.setNavDiv} />

          <Problem mainStyle={mainStyle} />
          <div style={mainStyle.wavyDiv}>
            <FewWords mainStyle={mainStyle} />
          </div>
            <Packages mainStyle={mainStyle} />
            <Teams mainStyle={mainStyle} />
            <FAQ mainStyle={mainStyle} />
            <Footer mainStyle={mainStyle} />
            <Contact mainStyle={mainStyle} />

          <div
            style={{
              height: "1000px",
              width: "100%",
              backgroundColor: "white"
            }}
          />
          <Footer mainStyle={mainStyle} />
          <PostFooter mainStyle={mainStyle} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
