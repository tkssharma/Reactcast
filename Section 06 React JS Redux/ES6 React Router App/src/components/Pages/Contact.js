import React from 'react'

const Contact = (props) => (
  <div>
    <h1>Contact</h1>
    <p>{props.location.query.message || 'contact us'}</p>
  </div>
);
export default Contact