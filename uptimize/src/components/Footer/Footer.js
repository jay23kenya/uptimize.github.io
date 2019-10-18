import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid  } from '@material-ui/core'

const styles={

}
const Footer = props => {
    return (
    <div>
        <Container fixed style={props.mainStyle.fonts}>
        <Grid> 
        
        </Grid>
        </Container>
    </div>
    )
}

Footer.propTypes = {
    mainStyle: PropTypes.object
}

Footer.defaultProps = {

}

export default Footer