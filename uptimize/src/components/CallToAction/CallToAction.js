import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { ReactComponent as Amer } from "../../images/amer.svg";
import ColorButton from "../../misc/ColorButton";
import LazyLoad from "react-lazyload";
import "./responsive.css";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = {
  image: {
    height: "400px",
    position: "absolute"
  },
  center: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  shadow: {
    boxShadow:
      "0 0 20px rgba(0, 0, 0, 0.2), 0px 0px 8px 0px rgba(0, 0, 0, 0.19)",
    height: "400px"
  },
  amerDiv: {
    position: "relative"
  },
  text: {
    fontSize: "20px",
    fontWeight: 500
  }
};

const CallToAction = props => (
  <div style={{ backgroundColor: "white", ...props.mainStyle.section }}>
    <Container fixed style={{}}>
      <div className="d-flex" style={styles.shadow}>
        <div id="amerDiv" style={styles.amerDiv}>
          <LazyLoad once height={200} offset={[-500, 500]}>
            <Amer className='animated fadeIn' style={styles.image} />
          </LazyLoad>
        </div>
        <div className="text-center" style={styles.center}>
          <div style={{ display: "inline-block" }}>
            <h2 id="header" style={{ ...props.mainStyle.subHeader }}>
              10X Your Business – Drive More Leads and Sales
            </h2>
            <h3
              id="subHeader"
              className="mb-3"
              style={{ ...props.mainStyle.subHeader, ...styles.text }}
            >
              Grow your business, get more customers and beat your competition –
              find out how
            </h3>
            <ColorButton
              contained
              noRadius
              color={props.mainStyle.buttonColor.color}
              hoverColor={props.mainStyle.buttonColor.hoverColor}
              style={{
                ...props.mainStyle.bigButton,
                ...props.mainStyle.button
              }}
            >
              Get Started
            </ColorButton>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

CallToAction.propTypes = {
  mainStyle: PropTypes.object
};
CallToAction.defaultProps = {};

export default CallToAction;
