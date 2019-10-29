import React from "react";
import PropTypes from "prop-types";
import Amer from "../../images/official_amer2.JPG";
import Wade from "../../images/wade.jpg";
import Jay from "../../images/jay.jpg";
import alejandro from "../../images/alejandro.jpg";
import { Container, Grid } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import amerLazy from "../../images/amer-min.jpg";
import wadeLazy from "../../images/wade-min.jpg";
import droLazy from "../../images/alejandro-min.jpg";
import jayLazy from "../../images/jay-min.jpg";
import "./style.css";
import { styles } from "ansi-colors";
import { mdiLinkedinBox } from "@mdi/js";
import LinkedIn from "../../images/linkedin-box (2).png";
const teamMembers = [
  {
    name: "Amer",
    fullName: "Amer Abdelaziz",
    title: "CEO / Founder",
    image: Amer,
    lazyImage: amerLazy,
    url : "https://www.linkedin.com/in/amer-farha-kahla-a44a77139/"
  },
  {
    name: "Wade",
    fullName: "Wade Smith",
    title: "Co-Founder / President",
    image: Wade,
    lazyImage: wadeLazy,
    url: "https://www.linkedin.com/in/theengineerwadejr/"
  },
  {
    name: "Jay",
    fullName: "Jay Patel",
    title: "Web Development Manager",
    image: Jay,
    lazyImage: jayLazy,
    url: "https://www.linkedin.com/in/jppatel23/"
  },
  {
    name: "Alejandro",
    fullName: "Alejandro",
    title: "Design Manager",
    image: alejandro,
    lazyImage: droLazy
  }
];

const style = {
  img: {
    //absolute ==> i absolo want to def exatly where i want it to be
    //rel ==> anything abs insid eof something rel, put it inside this rel space
    // fixed ==> do not move at all, hero is fixed
    // ticky ==> navbar is sticky once u scroll right past it
    // flex ==> things right next to each other
    // inline ==> one per line
    height: "350px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  text: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    color: "white",    
  },
  rel: {},
  team: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat, sans-serif",
    marginTop: "220px",
    marginLeft: "30px",
    textSize: "30px"
  },
  titletext: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "10px",
    textTransform: " uppercase",
    fontWeight: "500px",
    letterSpacing: "2px",    
    
  }
};

const Teams = props => {
  return (
    <Container fixed>
      <Grid container spacing={4}>
        {teamMembers.map(member => (
          <Grid item xs={12} md={3}>
            <LazyLoad
              height={100}
              placeholder={
                <div
                  id="member"
                  style={{
                    backgroundImage: `url(${member.lazyImage})`,
                    ...style.img
                  }}
                >
                  <div id="overlay">
                    <div style={{ ...style.team }}>
                      <div style={{ color: "white", ...style.text }}>
                        {member.fullName}
                      </div>
                      <div style={{ ...style.titletext, marginBottom: "20px" }} >
                        {member.title}
                      </div>
                      <div>
                        <a href={member.url}>
                          <img src={LinkedIn} />
                        </a>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              }
            >
              <div
                style={{
                  backgroundImage: `url(${member.image})`,
                  ...style.img
                }}
                id="member"
              >
                <div id="overlay">
                  <div style={{ ...style.team }}>
                    <div style={{ color: "white", ...style.text }}>
                      {member.fullName}
                    </div>
                    <div style={{ color: "white", ...style.titletext}}>
                      {member.title}
                    </div>
                    <div style={{ color: "white", "marginTop": "10px" }}>
                      <a href={member.url}>
                        <img src={LinkedIn} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Teams;
