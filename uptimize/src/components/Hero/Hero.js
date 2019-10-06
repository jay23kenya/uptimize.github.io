import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";
import backgroundImage from "../../images/HeroImage.jpg";
import lazyBackgroundImage from "../../images/HeroImage-min.jpg";
import LazyLoad from "react-lazyload";
import FadeInText from "./FadeInText";


const styles = {
  hero: {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  lazyHero: {
    backgroundImage: `url(${lazyBackgroundImage})`,
    height: "100vh",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  centerDiv: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, .6)",
    height: "100%",
    width: "100%"
  },
  gradient: {
      background: '-webkit-linear-gradient(#03fc7f, #292)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
  }
};

const fadeInText = [
  "Ensure Results",
  "Connect with Customers",
  "Grow Your Business",
  "Improve Your Social Media Presence"
];

const HeroContent = props => {
  console.log("p2", props);
  return (
    <div style={props.lazy ? styles.lazyHero : styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.centerDiv}>
          <Container fixed>
            <div className="text-center" style={{ color: "white" }}>
              <h1 style={{ ...props.mainStyle.header, ...styles.growText }}>
                Marketing to Help You <span style={styles.gradient}>Grow</span> Your Business
              </h1>
         
              <FadeInText fadeInText={fadeInText} mainStyle={props.mainStyle} />
              {/* <h2
              style={{
                ...props.mainStyle.subHeader,
                fontSize: "32px",
                fontWeight: "400"
              }}
            >
              <i>
                Ensure Results • Connect with Customers • Grow Your Business
             
              </i>
            </h2> */}
              {/* <Button>Learn More</Button> */}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  //If true lazy load the hero background
  lazy: PropTypes.bool,
  mainStyle: PropTypes.object
};

const Hero = props => {
  return (
    <div>
      <Parallax>
        <LazyLoad
          once
          height={500}
          offset={200}
          placeholder={<HeroContent lazy mainStyle={props.mainStyle} />}
        >
          <HeroContent mainStyle={props.mainStyle} />
        </LazyLoad>
      </Parallax>
    </div>
  );
};

Hero.propTypes = {
  mainStyle: PropTypes.object
};

Hero.defaultProps = {};

export default Hero;
