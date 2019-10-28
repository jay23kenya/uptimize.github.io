import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Link, BottomNavigation } from "@material-ui/core";
import PostFooter from "./PostFooter";
import './style.css'
import { ReactComponent as Logo } from "../../images/logo.svg";

const styles = {
  logoWidth: {
    // width: "500px"
  },
  footer: {
    height: "350px",
    width: "100%",
    marginTop: "50px",
    zIndex: 10000,
  },
  logo: {
    height: "100%",
    width: "100%",
    position: {
      position: "absolute",
      bottom: "20px"
    }
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
      <div className="bg-dark" style={styles.footer}>
        <Container fixed>
        <Grid container spacing={10} alignContent="center">
          <Grid item xs={12} md={4}  style={props.mainStyle.footerGrid} alignContent={"center"}>
              <div style={props.mainStyle.footerText}>
                 <h5>Uptimize Digital </h5> 
                 <h5>Marketing</h5>
                 <h6>(813)-447-3566</h6>
                  <h6>updtimizedm@gmail.com</h6>
                  <div class="social-links">             
         <a href="https://www.facebook.com/uptimizedm/?view_public_for=404663550311822" class="facebook"><i class="fa fa-facebook"><img src="https://img.icons8.com/material/24/000000/facebook-new.png" /></i></a>
         <a href="https://www.instagram.com/uptimizemarketing/" class="instagram"><i class="fa fa-instagram"><img src="https://img.icons8.com/material/24/000000/instagram-new.png" /></i></a>             
         <a href="https://www.yelp.com/user_details?userid=l1JinCUoKFyxuwm_vDBVtQ" class="yelp"><i class="fa fa-yelp"><img src="https://img.icons8.com/material/24/000000/yelp.png" /></i></a>  
         <a href="https://www.linkedin.com/in/uptimized-digital-marketing-03899b183/" class="linkedin"><i class="fa fa-linkedin"><img src="https://img.icons8.com/material/24/000000/linkedin--v1.png" /></i></a>  
         <a href="https://www.youtube.com/channel/UCHtg5x854nCN6odN4rKpNCw?view_as=subscriber" class="youtube"><i class="fa fa-youtube"><img src="https://img.icons8.com/material/24/000000/youtube--v1.png" /></i></a>  
         </div>
              </div>
          </Grid>
          <Grid item xs={12} md={4}  style={props.mainStyle.footerGrid} alignContent={"center"} >
              <div style={props.mainStyle.footerText}>
                 <h5>Business Info</h5> 
                 <h6>11326 N. 46th St</h6>
                  <h6>Tampa, FL 33617</h6>
              </div>
          </Grid>
          <Grid item xs={12} md={4}  style={props.mainStyle.footerGrid} alignContent={"center"} >
              <div style={props.mainStyle.footerText}>
                 <h5>Office Hours</h5> 
                 <h6>All Day, Everyday</h6>
                  <h6>┬⌐ Copyright Uptimize Digital Marketing. </h6>
                  <h6>All Rights Reserved.</h6>
              </div>
          </Grid>
        </Grid>
        <Grid container spacing={10}> 
        <Grid item xs={12} md={4} >
            
          </Grid>
        <Grid item xs={12} md={4} >
                <div style={styles.logo.position}>
                <Logo height={styles.logo.height} width={styles.logo.width} />
              </div>
          </Grid>
          <Grid item xs={12} md={4} >
            
          </Grid>
        </Grid>
       
          {/* <footer>
            <div class="mui-container mui--text-center">
              <h5>
                ┬⌐ Copyright Uptimize Digital Marketing. All Rights Reserved.
              </h5>
              <h5>Uptimize LLC</h5>
            </div>
          </footer> */}
        </Container>
      </div>
  );
};

Footer.propTypes = {
  mainStyle: PropTypes.object
};

export default Footer;
