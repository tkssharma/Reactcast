import React from 'react'

const Content = props =>{
  return(
    <div className="jumbotron" style={{overflow: 'auto'}}>
      {props.children}
    </div>
  )
};
export default Content