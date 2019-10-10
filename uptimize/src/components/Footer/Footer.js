import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Link } from "@material-ui/core";

const styles = {
    logoWidth: {
        // width: "500px"
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
    <div className='bg-dark' style={{height: '350px', width: '100%'}}>
      <Container fixed >
        <Grid container>
          <Grid item className="d-flex">
            <div className="" style={styles.logoWidth}>
              logo
              {/* <uptimize /> */}
            </div>
            <div>Copyright</div>
          </Grid>
          <Grid item className="d-flex">
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
