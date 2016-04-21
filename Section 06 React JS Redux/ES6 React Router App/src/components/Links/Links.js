import React from 'react'
import {Link} from 'react-router'

const Links = () =>(
  <nav>
    <Link 
      activeStyle={{color: 'coral'}} 
      to="/">
      Home
    </Link>
    <Link 
      activeStyle={{color: 'coral'}} 
      to="/about/Bob">
      About
    </Link>
    <Link 
      activeStyle={{color: 'coral'}} 
      to={ {pathname: '/contact', query: {message: 'call me'}} }>
      Contact
    </Link>
  </nav>
);
export default Links