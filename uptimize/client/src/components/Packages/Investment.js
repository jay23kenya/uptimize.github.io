import React from "react";
import PropTypes from "prop-types";

const Investment = props => {
  return (
    <div className='mb-5'>
      <div className='text-center'>
        <h2 style={{ ...props.mainStyle.subHeader }}>What's My Investment?</h2>
      </div>
      <div className=' w-100'>
        <p style={{ ...props.mainStyle.text, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        What's the value of a new customer for your business? How much is the <b>lack of your online pressence</b> costing you? How many potential
          customers <b>can’t hear your offer</b> in the sea of noise? Can potential
          customers understand why they need your product or service? A lack of
          clarity may already be <b>costing you</b> a great deal.
        </p>
      </div>
    </div>
  );
};

Investment.propTypes = {
  mainStyle: PropTypes.object
};

export default Investment;
