import React from 'react'

const Header = (props) =>{
  return(
    <h1 style={{borderBottom: '1px solid #ccc'}}>
      {props.title}
    </h1>
  )
};

export default Header