import React from 'react';
import PropTypes from 'prop-types';
import {Container, BottomNavigation} from '@material-ui/core'
import './style.css'
const Footer = () => (
    <div>
       <Container fixed>
       <footer>
      <div class="mui-container mui--text-center">
     <h2>© Copyright Uptimize Digital Marketing. All Rights Reserved.</h2> 
        <h2>Uptimize LLC</h2>
      </div>
    </footer>
        </Container>  
    </div>
)

Footer.propTypes = {
    mainStyle: PropTypes.object
}
Footer.defaultProps = {

}

export default Footer;