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

const Teams = () => (
  <div>
    <Container fixed>
        <h1 style={{textAlign: "center"}}>Meet The Team</h1>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <LazyLoad height={200} offset={100}>
                  <CardMedia
                    component="img"
                    alt="Amer"
                    height="250"
                    image={Amer}
                    title="Amer"
                  />
                   <div class="col-lg-3 col-md-6 wow fadeInUp">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Amer Abdelaziz
                    </Typography>
                    <Typography
                      variant="body"
                      color="textSecondary"
                      component="h2"
                      align="center"
                    >
                      CEO/Founder
                      <Typography >
                          
                      </Typography>
                    </Typography>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="www.facebook.com">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </CardContent>
                  </div>
                </LazyLoad>
              </CardActionArea>
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
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Wade Smith
                    </Typography>
                  
                  <Typography
                    variant="body"
                    color="textSecondary"
                    component="h2"
                    align="center"
                  >
                    President/Co-Founder{" "}
                  </Typography>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="www.facebook.com">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <CodeIcon />
                  </IconButton>
                  </CardContent>
                </LazyLoad>
              </CardActionArea>
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
                    alt="Jay"
                    height="250"
                    image={Jay}
                    title="Jay"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Jay Patel
                    </Typography>
                    <Typography
                      variant="body"
                      color="textSecondary"
                      component="h2"
                      align="center"
                    >
                        Web Development Manager
                    </Typography>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="www.facebook.com">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </CardContent>
                </LazyLoad>
              </CardActionArea>
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
                    alt="Alejandro"
                    height="250"
                    image={alejandro}
                    title="Alejandro"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Alejandro
                    </Typography>
                    <Typography
                      variant="body"
                      color="textSecondary"
                      component="h2"
                      align="center"
                    >
                        Content Manager
                    </Typography>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="www.facebook.com">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </CardContent>
                </LazyLoad>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
);

Teams.propTypes = {
  mainStyle: PropTypes.object
};
Teams.defaultProps = {};

export default Teams;
