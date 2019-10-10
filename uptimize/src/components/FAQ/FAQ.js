import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import Collapsible from "react-collapsible";
import './style.css'
const FAQ = () => (
  <div>
    <Container fixed>
      <h2>Frequently Asked Questions</h2>
      
      <Button><Collapsible trigger="What platforms do you advertise on?" className="one" openedClassName="openone"> <p>
      We usually advertise on Facebook, Instagram, Twitter, Yelp, Linkedin,
          Google, and Youtube.
      </p>    
    </Collapsible></Button>
      
     <Button>
    <Collapsible trigger="Can I customize my own package?" className="two" openedClassName="opentwo">
      <p>
      Yes! You can customize your own package by contacting us. Following
        that, we will give you a quote.
      </p>    
    </Collapsible>
    </Button>
    <Button>
    <Collapsible trigger="Can you create me my own custom audience to target?" className="three" openedClassName="openthree">
      <p>
      YES! Absolutely, our knowledge of Audience Insights allows us to create
        the best audeince that matches your preferences, whether it's sellers,
        buyers, previous customers, etc. We've got your audience covered!
      </p>    
    </Collapsible>
    </Button>
    <Button>
    <Collapsible trigger="Can I have my own photographer?" className="four" openedClassName="openfour" >
      <p>
      Yes, you can have your own photographer. We can edit the images even
        further if needed and we can also post any images you would want.
      </p>    
    </Collapsible>
    </Button>
    <Button>
    <Collapsible trigger="Can I have photography sessions without the subscriptional plan?" className="five" openedClassName="openfive">
      <p>
      Yes, we charge a certain fee for just photography sessions. Contact us
        to get your quote!
      </p>    
    </Collapsible>
    </Button>
    </Container>
    
    </div>
);

FAQ.propTypes = {
  mainStyle: PropTypes.object
};
FAQ.defaultProps = {};

export default FAQ;
