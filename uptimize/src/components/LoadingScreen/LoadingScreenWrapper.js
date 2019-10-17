import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const LoadingScreenWrapper = props => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition timeout={(props.animationDuration + .1) *1000}  classNames="page">
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

LoadingScreenWrapper.propTypes = {
  children: PropTypes.element.isRequired, 
  animationDuration: PropTypes.string.isRequired
};

export default LoadingScreenWrapper;
