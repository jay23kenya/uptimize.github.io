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
import { width } from "@material-ui/system";

const teamMembers = [
    {
        name: "Amer",
        fullName: "Amer Abdelaziz",
        title: "CEO / Founder",
        image: Amer,
    },
    {
        name: "Jay",
        fullName: "Jay Patel",
        title: "Web Development Manager",
        image: Jay,

    },
    {
        name: "Wade",
        fullName: "Wade Smith",
        title: "Co-Founder / President",
        image: Wade,


    },
    {
        name: "Alejandro",
        fullName: "Alejandro",
        title: "Design Manager",
        image: alejandro,


    },
]

const Teams2 = (props) => {
  return(
    <div>
    <Container fixed>
  {  teamMembers.map((member) => (    
    <div style={{"width": "100%", "display": "inline-block"}}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
        <Paper>
          <Card>
         <CardMedia
                    component="img"
                    alt="Amer"
                    height="250"
                    image={member.image} 
                    title="Amer"
                    style={{"display" : "inline-block"}}                 
                  />    </Card>  </Paper>        
        </Grid>    
        </Grid>     
        </div>           
    ))}
   </Container>
</div>
  )
  // while (j < 4) {
  //   arr[j] = (
  //     <Grid item xs={3}>
  //       <Paper>
  //         <Card>
  //           <CardActionArea>
  //             <div class="team-member">
  //               <div class="team-img">
  //                 <CardMedia
  //                   //className="img-responsive"
  //                   component="img"
  //                   alt={names[j]}
  //                   image={images[j]}
  //                   title={names[j]}
  //                 />
  //               </div>
  //               <div class="team-hover">
  //                 <div class="desk">
  //                   <h4>{fullNames[j]}</h4>
  //                   <p>{titles[j]}</p>
  //                 </div>
  //                 <div class="s-link">
  //                                       <a href="#"><i class="fa fa-facebook"><FacebookIcon /></i></a>
  //                                       <a href="#"><i class="fa fa-twitter"><InstagramIcon/></i></a>
  //                                       <a href="#"><i class="fa fa-google-plus"><CodeIcon/></i></a>
  //                                   </div>
  //               </div>
  //               <div class="team-title">
  //                 <h5>{fullNames[j]}</h5>
  //                 <span>{titles[j]}</span>
                  
  //               </div>
  //             </div>
  //           </CardActionArea>
  //         </Card>
  //       </Paper>
  //     </Grid>
  //   );
  //   j++;
  // }
};

export default Teams2;
