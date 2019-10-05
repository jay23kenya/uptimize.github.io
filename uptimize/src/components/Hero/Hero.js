import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'

const Hero = props => {
    return (
    <div>
        <Container fixed>
        <h1>works</h1>
        </Container>
    </div>
    )
}

Hero.propTypes = {
    mainStyle: PropTypes.object
}

Hero.defaultProps = {

}

export default Hero