import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Links from './Links/Links'

// Layout Component
// - collecting sub-components
// - passing down the 'title' prop from App.js
const title = 'Some Website';
export default (props) =>{
  return(
    <div>
      <Links />
      <Header title={title} />
      <Content 
        children={props.children} 
        title={title} 
        className="container" 
      />
      <Footer title={title} />
    </div>
  )
}