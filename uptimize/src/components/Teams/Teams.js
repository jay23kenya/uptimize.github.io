
import React from "react";
import PropTypes from "prop-types";
import { Container, Paper, Grid, Icon } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Amer from "../../images/amer.jpg";
import Wade from "../../images/wade.jpg";
import Jay from "../../images/jay.jpg";
import alejandro from "../../images/alejandro.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LazyLoad from "react-lazyload";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import { CardHeader } from '@material-ui/core';
import { Popper } from "react-popper";

const Teams = props => {
  console.log("Team props", props)
  return(
  <div style={{...props.mainStyle.section, backgroundColor: 'white'}}>
    <Container fixed>
        <h1 style={{textAlign: "center"}}>Meet The Team</h1>
        <Grid container spacing={4} >
        <Grid item xs={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <LazyLoad height={200} offset={100}>
                  <CardMedia
                  style={{...props.mainStyle.overlay}}
                    component="img"
                    alt="Amer"
                    height="250"
                    image={Amer}
                    title="Amer"
                  />         
                </LazyLoad>
              </CardActionArea>
              <Typography style={{...props.mainStyle.text}}>
                Amer
              </Typography>
              <div style={{...props.mainStyle.overlay}}>
                    <div style={{...props.mainStyle.text}}></div>
                    </div>
            </Card>
          </Paper>
        </Grid>
       

        <Grid item xs={3}>
          <Paper>
            <Card>
            <CardActionArea>
                <LazyLoad height={200} offset={100}>
                  <CardMedia
                    component="img"
                    alt="Wade"
                    height="250"                    
                    image={Wade}
                    title="Wade"
                    style={{...props.mainStyle.overlay}}
                  />
                  </LazyLoad>
                    </CardActionArea>
                    <Typography style={{...props.mainStyle.text}}>
               Wade
              </Typography>
            </Card>
          </Paper>
        </Grid>
        </Grid>
       <Grid container spacing={4} >
        <Grid item xs={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <LazyLoad height={200} offset={100}>
                  <CardMedia
                    component="img"
                    alt="Jay"
                    height="250"
                    image={Jay}
                    title="Jay"
                    style={{...props.mainStyle.overlay}}
                  />
                 
                </LazyLoad>
              </CardActionArea>
              <Typography style={{...props.mainStyle.text}}>
               Wade
              </Typography>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <LazyLoad height={200} offset={100}>
                  <CardMedia
style={{...props.mainStyle.overlay}}
                    component="img"
                    alt="Alejandro"
                    height="250"
                    image={alejandro}
                    title="Alejandro"
                  />      
                </LazyLoad>
              </CardActionArea>
              <Typography style={{...props.mainStyle.text}}>
               Wade
              </Typography>
            </Card>
          </Paper>
        </Grid>
        </Grid>
        </Container>
  </div>
  )
}

Teams.propTypes = {
  mainStyle: PropTypes.object
};
Teams.defaultProps = {};

export default Teams;