import React from "react";
import PropTypes from "prop-types";
import { Grid, Container } from "@material-ui/core";
import Package from "./Package";
import Investment from "./Investment";

const package1 = {
  title: "Setup",
  price: "600",
  features: [
    "Facebook Page Setup",
    "Instagram Page Setup",
    "Google Business Page Setup",
    "Yelp Page Setup",
    "Complementary Logo or Photography Session"
  ]
};
const package2 = {
  title: "Gold",
  price: "2,000",
  features: [
    "Setup Package",
    "Social Media Posts",
    "Facebook & Instagram Advertising",
    "Google Advertsing & Analytics",
    "Landing Page",
    "Photography / Videography Session per quarter year",
    <b>Lead Management System</b>,
    "Logo Design"
  ]
};

const package3 = {
  title: "Diamond",
  price: "3,500",
  features: [
    "Gold Package",
    "Website Development and Maintenance",
    "SEO",
    "Email Marketing",
    "Branding"
  ]
};

const Packages = props => {
  return (
    <div id='pricing' style={{ ...props.mainStyle.section }}>
      <Container fixed>
        <div className="pb-5 mt-5" style={{ marginBottom: "" }}>
          <Investment mainStyle={props.mainStyle} />
        </div>

        <div className="mb-5">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Package
                mainStyle={props.mainStyle}
                package={package1}
                flatRate
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Package
                recommended
                mainStyle={props.mainStyle}
                package={package2}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Package mainStyle={props.mainStyle} package={package3} />
            </Grid>
          </Grid>
        </div>
        <div className="text-center mb-5">
          <p style={{ ...props.mainStyle.text }}>
            <i>Risk free 30-day money back guarantee</i>
          </p>
        </div>
      </Container>
    </div>
  );
};

Packages.propTypes = {
  mainStyle: PropTypes.object
};

export default Packages;

/* <div className="text-center mb-5">
          <h2 style={{ ...props.mainStyle.subHeader }}>Our Pricing</h2>
          <p style={{ ...props.mainStyle.text }}>
            <i>Risk free 30-day money back guarantee</i>
          </p>
        </div> */
