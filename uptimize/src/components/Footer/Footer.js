import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Link, BottomNavigation } from "@material-ui/core";
import PostFooter from "./PostFooter";
import './style.css'

const styles = {
  logoWidth: {
    // width: "500px"
  },
  footer: {
    height: "350px",
    width: "100%",
    zIndex: 10000,
    position: "-webkit-sticky",
    position: "sticky",
  },
  postFooter: {
    position: "-webkit-sticky",
    position: "sticky",
    bottom: 0,
  },
};

const links = [
  {
    linkText: "home",
    route: "/#home"
  },
  {
    linkText: "problem",
    route: "/#problem"
  },
  {
    linkText: "solution",
    route: "/#solution"
  }
];

const Footer = props => {
  return (
    <div style={{position: 'relative', backgroundColor: 'white'}}>
      <div className="bg-dark" id='footer'>
        <Container fixed>
          <footer>
            <div class="mui-container mui--text-center">
              <h2>
                © Copyright Uptimize Digital Marketing. All Rights Reserved.
              </h2>
              <h2>Uptimize LLC</h2>
            </div>
          </footer>
        </Container>
      </div>
      <div id='postFooter' >
        <PostFooter mainStyle={props.mainStyle} />
      </div>
    </div>
  );
};

Footer.propTypes = {
  mainStyle: PropTypes.object
};

export default Footer;
