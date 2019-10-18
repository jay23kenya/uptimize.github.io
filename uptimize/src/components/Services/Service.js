import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import './style.css'

const styles = {
    content: {
        position: 'relative',
        zIndex: 1,
    borderRadius: "5px",
    border: '1px #555',
    //boxShadow: '0 0 30px rgba(0, 0, 0, 0.6)',
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2), 20px 20px 20px 20px rgba(0, 0, 0, 0.19)",
    backgroundColor: 'white',
    height: '100%'
    
    },
    image: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    }
};

const Service = props => {
  return (
    <div id='service' style={{height: '100%'}}>
      <Card style={{height: '100%'}}>
          <div style={{ height: '200px', width: '100%', backgroundColor: props.imageBackgroundColor }}>
          <div style={styles.image}>
        <CardMedia
          component="img"
          alt={props.imageTitle}
          height="140"
          image={props.image}
          title={props.imageTitle}
          style={{...props.imageStyle}}
        />
 
        
        </div>
        </div>
        <CardContent style={styles.content} className="text-center">
          <div>
            <h2 style={{ ...props.mainStyle.subHeader, fontSize: '22px' }}>{props.title}</h2>
          </div>
          <div>
            <p style={{ ...props.mainStyle.text }}>{props.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
Service.propTypes = {
  mainStyle: PropTypes.object,
  image: PropTypes.element.isRequired,
  imageStyle: PropTypes.object,
  imageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageBackgroundColor: PropTypes.string
};

export default Service;
