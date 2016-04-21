import React from 'react'

const Footer = (props) =>{
  return(
    <footer>
      <h5 style={{borderTop: '1px solid #ccc'}}>
        &copy; 2015 {props.title}
      </h5>
    </footer>
  )
};
export default Footer