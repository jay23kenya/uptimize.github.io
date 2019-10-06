import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  SvgIcon,
  ListItemIcon,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";

const problems1 = [
  "Is explaining what you do complicated?",
  "Did your last marketing effort flop?",
  "Is it time to revamp your website?"
];

const problems2 = [
  "Are you struggling to get new leads?",
  "Do you need a common story to unite your staff?",
  "Does marketing make your brain hurt?"
];

const Problem = props => {
  return (
    <div
      id='problem'
      style={{
        ...props.mainStyle.alternateBackgroundColor,
        ...props.mainStyle.section
      }}
    >
      <Container>
        <div className="text-center mb-3">
          <h2 style={{ ...props.mainStyle.subHeader }}>
            Do You Struggle With Your Message?
          </h2>
        </div>
        <div className="mb-3 pb-3">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid className='mb-0 pb-0' style={{ maxWidth: "400px" }} item xs={12} md={6}>
              <List>
                {problems1.map((problem, idx) => (
                  <ListItem key={idx} alignItems="flex-start">
                    <ListItemIcon>
                      <SvgIcon>
                        <path
                          fill={props.mainStyle.secondaryColor.color}
                          d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                        />
                      </SvgIcon>
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ ...props.mainStyle.text }}>{problem}</div>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid className='mt-0 pt-0'style={{ maxWidth: "400px" }} item xs={12} md={6}>
              <List>
                {problems2.map((problem, idx) => (
                  <ListItem key={idx} alignItems="flex-start">
                    <ListItemIcon>
                      <SvgIcon>
                        <path
                          fill={props.mainStyle.secondaryColor.color}
                          d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                        />
                      </SvgIcon>
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ ...props.mainStyle.text }}>{problem}</div>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
        <div className="text-center">
          <ColorButton
            contained
            noRadius
            textColor="white"
            color={props.mainStyle.buttonColor.color}
            hoverColor={props.mainStyle.buttonColor.hoverColor}
            style={{
              ...props.mainStyle.bigButton,
              ...props.mainStyle.button
            }}
          >
            Learn More
          </ColorButton>
        </div>
      </Container>
    </div>
  );
};

Problem.propTypes = {
  mainStyle: PropTypes.object
};

export default Problem;
