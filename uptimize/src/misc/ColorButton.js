import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

export default function ColorButton(props) {
  const ContainedButton = withStyles(theme => ({
    root: {
      color: props.textColor
        ? props.textColor
        : theme.palette.getContrastText(props.color),
      borderRadius: props.noRadius ? "0px" : "5px",
      backgroundColor: props.color,
      "&:hover": {
        color: props.textHoverColor
          ? props.textHoverColor
          : props.textColor
          ? props.textColor
          : theme.palette.getContrastText(props.color),
        backgroundColor: props.hoverColor
      }
    }
  }))(Button);

  const OutlinedButton = withStyles(theme => ({
    root: {
      color: props.textColor
        ? props.textColor
        : theme.palette.getContrastText(props.color),
      borderColor: props.color,
      borderRadius: props.noRadius ? "0px" : "5px",
      "&:hover": {
        color: props.textHoverColor
          ? props.textHoverColor
          : theme.palette.getContrastText(props.color),
        borderColor: props.hoverColor,
        backgroundColor: props.hoverColor
      }
    }
  }))(Button);

  return (
    <div>
      {props.contained ? (
        <div>
          <ContainedButton
            className={props.className}
            variant="contained"
            color="primary"
            style={props.style}
          >
            {props.children}
          </ContainedButton>
        </div>
      ) : (
        <div>
          <OutlinedButton
            className={props.className}
            variant="outlined"
            color="primary"
            style={props.style}
          >
            {props.children}
          </OutlinedButton>
        </div>
      )}
    </div>
  );
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  hoverColor: PropTypes.string.isRequired,
  contained: PropTypes.bool,
  noRadius: PropTypes.bool,
  style: PropTypes.object
};
