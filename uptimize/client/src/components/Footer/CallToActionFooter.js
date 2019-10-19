import React from "react";
import PropTypes from "prop-types";
import Footer from './Footer'
import PostFooter from "./PostFooter";
import './style.css'


const CallToActionFooter = props => {
  return (
    <div style={{position: 'relative', backgroundColor: 'white'}}>
        <div id='footer'>
      <Footer mainStyle={props.mainStyle} /></div>
      <div id='postFooter' >
        <PostFooter mainStyle={props.mainStyle} />
      </div>
    </div>
  );
};

CallToActionFooter.propTypes = {
  mainStyle: PropTypes.object
};

export default CallToActionFooter;
