import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  slideOutDown,
  none
} from "./Transitions";

const getAnimation = (animation, animationDuration, timeout) => {
  const Page = styled.div``;
  switch (animation) {
    case "slideOutLeft":
      return styled(Page)`
        animation: ${slideOutLeft} ${animationDuration}s forwards;
        animation-delay: ${timeout}s;
      `;
    case "slideOutRight":
      return styled(Page)`
        animation: ${slideOutRight} ${animationDuration}s forwards;
        animation-delay: ${timeout}s;
      `;
    case "slideOutUp":
      return styled(Page)`
        animation: ${slideOutUp} ${animationDuration}s forwards;
        animation-delay: ${timeout}s;
      `;
    case "slideOutDown":
      return styled(Page)`
        animation: ${slideOutDown} ${animationDuration}s forwards;
        animation-delay: ${timeout}s;
      `;

    default:
      return styled(Page)`
        animation: ${none} ${animationDuration}s forwards;
        animation-delay: ${timeout}s;
      `;
  }
};

const styles = {
  root: {
    height: "100vh",
    zIndex: 10000000,
    position: "absolute",
    width: "100vw"
  },

  child: {
    position: "relative",
    zIndex: 0,
    
  },
  gone: {
    overflow: "hidden",
    display: 'none'
    // height: "100vh"
  }
};

let HomePageElm = null;
export class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    const { variation, animationDuration, timeout } = this.props;
    HomePageElm = getAnimation(variation, animationDuration, timeout);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, (parseFloat(this.props.timeout) + parseFloat(this.props.animationDuration) + parseFloat(this.props.extendOverflowTimeout)) * 1000);
  }

  render() {
    const { loadingScreen, children } = this.props;

    return (
      <div style={this.state.loaded ? {} : styles.noScroll}>
        <HomePageElm style={styles.root}>{loadingScreen}</HomePageElm>
        <div style={this.state.loaded ? styles.child : styles.gone}>{children}</div>
      </div>
    );
  }
}

LoadingScreen.propTypes = {
  loadingScreen: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  timeout: PropTypes.string.isRequired,
  animationDuration: PropTypes.string.isRequired,
  variation: PropTypes.string,
  extendOverflowTimeout: PropTypes.string
};

export default LoadingScreen;
