import React from "react";
import PropTypes from "prop-types";
import Amer from "../../images/amer.jpg";
import Wade from "../../images/wade.jpg";
import Jay from "../../images/jay.jpg";
import alejandro from "../../images/alejandro.jpg";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Card,
  IconButton,
  Container,
  Paper,
  Grid
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import LazyLoad from "react-lazyload";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./style.css"
const Teams = () => (
  <div>
    <Container fixed>
      <h1 style={{ textAlign: "center" }}>Meet The Team</h1>
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
                  <div  class="col-lg-3 col-md-6">
                    <CardContent >                   
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"                    
                      >
                      
                      
                       <div id="team-hover"><div id="desk"> Amer Abdelaziz</div> Im gay</div>
                      </Typography>
                      <Typography
                        variant="body"
                        color="textSecondary"
                        component="h2"
                        align="center"
                      >
                        CEO/Founder
                        <Typography></Typography>
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
                    className="desk"
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
        <Grid>
            <Paper>     
              <div class="container">
                    <div class="row">
                        <div class="heading-title text-center">
                            <h3 class="text-uppercase">Our professionals </h3>
                            <p class="p-top-30 half-txt">Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend. </p>
                        </div>

                        <div class="col-md-4 col-sm-4">
                            <div class="team-member">
                                <div class="team-img">
                                    <img src="https://image.freepik.com/free-photo/man-standing-with-a-black-t-shirt_1187-1045.jpg" alt="team member" class="img-responsive" />
                                </div>
                                <div class="team-hover">
                                    <div class="desk">
                                        <h4>Hi There !</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div class="s-link">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-title">
                                <h5>Martin Smith</h5>
                                <span>founder & ceo</span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="team-member">
                                <div class="team-img">
                                    <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive" />
                                </div>
                                <div class="team-hover">
                                    <div class="desk">
                                        <h4>Hello World</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div class="s-link">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-title">
                                <h5>Franklin Harbet</h5>
                                <span>HR Manager</span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4">
                            <div class="team-member">
                                <div class="team-img">
                                    <img src="https://image.freepik.com/free-photo/well-dressed-executive-with-crossed-arms_1098-3930.jpg" alt="team member" class="img-responsive" />
                                </div>
                                <div class="team-hover">
                                    <div class="desk">
                                        <h4>I love to design</h4>
                                        <p>I love to introduce myself as a hardcore Web Designer.</p>
                                    </div>
                                    <div class="s-link">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-google-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="team-title">
                                <h5>Linda Anderson</h5>
                                <span>Marketing Manager</span>
                            </div>
                        </div>

                    </div>

                </div>
                </Paper>
          </Grid>
    </Container>
  </div>
);

Teams.propTypes = {
  mainStyle: PropTypes.object
};
Teams.defaultProps = {};

export default Teams;
