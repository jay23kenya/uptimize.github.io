import React from "react";
import PropTypes from "prop-types";
import { Grid, Container } from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";
import Service from './Service'
import like from "../../images/like.svg";
import web from "../../images/web.svg";
import seo from "../../images/seo.svg";
import brand from "../../images/brand.svg";
import streetSign from "../../images/streetSign.jpg";
import photography from "../../images/photography.jpg";

const services1 = [
  {
    image: like,
    imageStyle: {height: '200px', width: '200px'},
    imageTitle: "Social Media Management",
    title: "Social Media Management",
    content:
      "We offer full-service social media management services. Transform your social media presence with high-quality content, daily activity, and increasing followers."
  },
  {
    image: streetSign,
    imageStyle: {height: '200px', width: '100%'},
    imageTitle: "Social Media Advertising",
    title: "Social Media Advertising",
    content:
      "Our social media advertising services are proven to accelerate growth. By advertising through social media, 100% of our clients have seen results at lower costs than before."
  },
  {
    image: web,
    imageStyle: {height: '250px', width: '250px'},
    imageBackgroundColor: '#9ccc65',
    imageTitle: "Web Development",
    title: "Web Development",
    content:
    "You need an effective website to get the most success from social media advertising. We build top quality websites that will keep your visitors engaged during the buying process."
  },
];
const services2 = [
  {
    image: seo,
    imageStyle: {height: '200px', width: '250px'},
    imageTitle: "SEO",
    title: "SEO",
    content:
      "Get found on Google & Bing for relevant searches with our SEO services. Our initial and ongoing optimization service ensures higher rankings and more clicks."
  },
  {
    image: photography,
    imageStyle: {height: '200px', width: '100%'},
    imageTitle: "Photography",
    title: "Photography",
    content:
      "A picture speaks for 1000 words. High quality photography is a prominent form of showcasing your business, products, and growing your brand!"
  },
  {
    image: brand,
    imageStyle: {height: '200px', width: '200px'},
    imageTitle: "Brand Development",
    title: "Brand Development",
    content:
    "Whether it's just a logo or the whole brand development package, having a reconizable identity online is crucial for leveraging organic traffic for your business."
  },
];

const Services = props => {
  return (
    <div id='services' className='mb-3 mt-3' style={{ ...props.mainStyle.section, backgroundColor: "white" }}>
      <Container fixed>
        <div className="text-center mb-5">
          <h2 className="mb-2" style={{ ...props.mainStyle.subHeader }}>
            Services
          </h2>
          <p style={{...props.mainStyle.text}}><i> We create and manage top-performing social media campaigns for businesses.</i></p>
        </div>
        <div className='mb-5' >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
            
            spacing={3}
          >
            {services1.map((service, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                  <Service mainStyle={props.mainStyle} 
                    image={service.image}
                    imageStyle={service.imageStyle}
                    imageBackgroundColor={service.imageBackgroundColor}
                    imageTitle={service.imageTitle}
                    title={service.title}
                    content={service.content}
                  />
        
              </Grid>
            ))}
            {services2.map((service, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                  <Service mainStyle={props.mainStyle} 
                    image={service.image}
                    imageStyle={service.imageStyle}
                    imageBackgroundColor={service.imageBackgroundColor}
                    imageTitle={service.imageTitle}
                    title={service.title}
                    content={service.content}
                  />
        
              </Grid>
            ))}
          </Grid>
        </div>
        <div className='text-center mb-5'>
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
