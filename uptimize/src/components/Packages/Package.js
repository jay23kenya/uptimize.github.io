import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Paper } from "@material-ui/core";

const Package = props => {
    return(
        <div>
            <Paper>
                
            </Paper>
        </div>
    )
}

Package.propTypes = {
    mainStyle: PropTypes.object,
    price: PropTypes.string.isRequired,
    flatRate: PropTypes.bool,
    title: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    minHeight: PropTypes.string,
    minWidth: PropTypes.string

}