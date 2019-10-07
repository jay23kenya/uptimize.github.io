import React from "react";
import PropTypes from "prop-types";
import { Grid, Container } from "@material-ui/core";

const Packages = props => {
    return(
        <div>
            <Container fixed>
                <Grid container>
                    <Grid item></Grid>
                    <Grid item></Grid>
                    <Grid item></Grid>
                </Grid>
            </Container>
        </div>

    )
}

Packages.propTypes = {

}

export default Packages