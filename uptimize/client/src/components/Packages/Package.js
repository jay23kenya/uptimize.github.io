import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon
} from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";
import "./style.css";

const styles = {
  price: {
    fontSize: "65px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 0.81,
    letterSpacing: "1.3px"
  },
  money: {
    fontSize: "18px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.56,
    letterSpacing: "normal",
    verticalAlign: "top"
  },
  title: {
    backgroundColor: "#2b2d3a",
    color: "white",
    padding: "35px",
    borderRadius: "5px 5px 0 0"
  },
  gradientLine: {
    height: "10px",
    background: "linear-gradient(90deg,#03fc7f, #aaa)",
    marginBottom: "10px"
  },
  goldGradientLine: {
    height: "10px",
    background: "linear-gradient(90deg,gold, #aaa)",
    marginBottom: "10px"
  },
  recommended: {
    border: "solid 2px gold",
    borderRadius: "5px"
  },
  goldGradient: {
    //#292
    background: "-webkit-linear-gradient(gold, #aaa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  gold: {
    color: '#faaa1e',//"#ffd700",
    hoverColor: "#ffd700"//"#D4AF37"
  }
};

const Package = props => {
  return (
    <div style={props.recommended ? styles.recommended : {}}>
      <Paper className="text-center" id="package">
        <div>
          <div style={{ ...styles.title }}>
            <h3
              style={
                props.recommended
                  ? {
                      ...props.mainStyle.subHeader,
                      ...styles.goldGradient
                    }
                  : { ...props.mainStyle.subHeader }
              }
            >
              {props.package.title}
            </h3>
          </div>
          <div
            style={
              props.recommended ? styles.goldGradientLine : styles.gradientLine
            }
          />
        </div>
        <div>
          <span
            style={{
              ...props.mainStyle.text,
              ...styles.money
            }}
          >
            $
          </span>
          <span
            style={{
              ...props.mainStyle.text,
              ...styles.price
            }}
          >
            {props.package.price}
          </span>
          {props.flatRate ? (
            <span
              className="text-muted"
              style={{
                ...props.mainStyle.text,
                fontSize: "14px"
              }}
            >
              flat
            </span>
          ) : (
            <span
              className="text-muted"
              style={{ ...props.mainStyle.text, fontSize: "14px" }}
            >
              /mo
            </span>
          )}
        </div>
        <div className="mt-3">
          <List>
            {props.package.features.map((feature, idx) => (
              <ListItem
                key={idx}
                alignItems="flex-start"
                style={{ paddingTop: "3px", paddingBottom: "3px" }}
              >
                <ListItemIcon>
                  <SvgIcon>
                    <path
                      fill={
                        props.recommended
                          ? styles.gold.color
                          : props.mainStyle.secondaryColor.color
                      }
                      d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText>
                  <div
                    style={{
                      ...props.mainStyle.text
                    }}
                  >
                    {feature}
                  </div>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="text-center mt-3 pb-3">
          <ColorButton
            contained={props.recommended}
            outline={!props.recommended}
            noRadius
            // textColor="white"
            color={
              props.recommended
                ? styles.gold.color
                : props.mainStyle.buttonColor.color
            }
            hoverColor={
              props.recommended
                ? styles.gold.hoverColor
                : props.mainStyle.buttonColor.hoverColor
            }
            style={{
              ...props.mainStyle.bigButton,
              ...props.mainStyle.button
            }}
          >
            Get Started
          </ColorButton>
        </div>
      </Paper>
    </div>
  );
};

Package.propTypes = {
  mainStyle: PropTypes.object,
  package: PropTypes.object.isRequired,
  flatRate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  recommended: PropTypes.bool
};

export default Package;
