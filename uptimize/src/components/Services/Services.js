import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Container } from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";

const services1 = [
  {
    icon: "blah",
    title: "Social Media Management Services",
    data:
      "We offer full-service social media management services. Transform your social media presence with high-quality content, daily activity, and increasing followers."
  },
  {
    icon: "blah",
    title: "Social Media Management Services",
    data:
      "We offer full-service social media management services. Transform your social media presence with high-quality content, daily activity, and increasing followers."
  },
  {
    icon: "blah",
    title: "Social Media Management Services",
    data:
      "We offer full-service social media management services. Transform your social media presence with high-quality content, daily activity, and increasing followers."
  }
];

const Services = props => {
  return (
    <div className='mb-3 mt-3' style={{ ...props.mainStyle.section, backgroundColor: "white" }}>
      <Container fixed>
        <div>
          <h2 className="text-center" style={{ ...props.mainStyle.subHeader }}>
            Services
          </h2>
        </div>
        <div className='mb-3' >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            {services1.map((service, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper>
                  <div>{service.icon}</div>
                  <div>{service.title}</div>
                  <div>{service.data}</div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className='text-center mb-3'>
        <ColorButton
            contained
            noRadius
            textColor="white"
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
        <div className='mb-3 text-center' >
            <p style={{...props.mainStyle.text}}><i>Have a question? <a href='tel:18134473566'>Give us a call.</a></i></p>
        </div>
      </Container>
    </div>
  );
};

Services.propTypes = {
  mainStyle: PropTypes.object
};

export default Services;
