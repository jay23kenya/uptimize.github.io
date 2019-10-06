import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Link } from "@material-ui/core";
// import uptimize from './imagojefj'

const styles = {
    logoWidth: {
        width: "500px"
    }
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
    <div>
      <Container fixed>
        <Grid container>
          <Grid item className="d-flex m-3">
            <div className="mr-3" style={styles.logoWidth}>
              logo
              {/* <uptimize /> */}
            </div>
            <div>Copyright</div>
          </Grid>
          <Grid item className="d-flex m-3">
            {links.map((link, idx) => (
              <div key={idx}>
                <Link href={link.route} target="_blank">
                  {link.linkText}
                </Link>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  mainStyle: PropTypes.object,
  hello: PropTypes.func.isRequired
};

Footer.defaultProps = {};

export default Footer;
