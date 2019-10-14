import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import Collapsible from "react-collapsible";
import { makeStyles } from "@material-ui/styles";
import { fontSize, fontWeight } from "@material-ui/system";



const useStyles = makeStyles(theme => ({
  first: {
  textAlign : 'center'
  },
  collap: {
    color: 'black',
    backgroundColor: 'white',
    border: 'black',
    fontSize:' 12px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    textAlign: 'left'
  },
  open: {
    color: 'black',
    backgroundColor: 'white',
    border:' black',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  button: {
    display: 'inline-block'
  },
}));

export default function FAQ(){
  const classes = useStyles();
  return(
      <div>
    <Container fixed>
      <h2 className={classes.first}>Frequently Asked Questions</h2>
      
      <Button className={classes.button}><Collapsible trigger="What platforms do you advertise on?" className={classes.collap} openedClassName={classes.open}> <p>
      We usually advertise on Facebook, Instagram, Twitter, Yelp, Linkedin,
          Google, and Youtube.
      </p>    
    </Collapsible></Button>
      
     <Button className={classes.button}>
    <Collapsible trigger="Can I customize my own package?" className={classes.collap} openedClassName={classes.open}>
      <p>
      Yes! You can customize your own package by contacting us. Following
        that, we will give you a quote.
      </p>    
    </Collapsible>
    </Button>
    <Button className={classes.button}>
    <Collapsible trigger="Can you create me my own custom audience to target?" className={classes.collap} openedClassName={classes.open}>
      <p>
      YES! Absolutely, our knowledge of Audience Insights allows us to create
        the best audeince that matches your preferences, whether it's sellers,
        buyers, previous customers, etc. We've got your audience covered!
      </p>    
    </Collapsible>
    </Button>
    <Button className={classes.button}>
    <Collapsible trigger="Can I have my own photographer?" className={classes.collap} openedClassName={classes.open} >
      <p>
      Yes, you can have your own photographer. We can edit the images even
        further if needed and we can also post any images you would want.
      </p>    
    </Collapsible>
    </Button>
    <Button className={classes.button}>
    <Collapsible trigger="Can I have photography sessions without the subscriptional plan?" className={classes.collap} openedClassName={classes.open}>
      <p>
      Yes, we charge a certain fee for just photography sessions. Contact us
        to get your quote!
      </p>    
    </Collapsible>
    </Button>
    </Container>
    
    </div>
  )
}

FAQ.propTypes = {
  mainStyle: PropTypes.object
};
FAQ.defaultProps = {};

