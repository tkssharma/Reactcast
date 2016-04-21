import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

// Rendering the Layout component
// to <div id="main"> in index.html
// while passing in the 'title' as a prop

ReactDOM.render(
  <Routes />,
  document.getElementById('main')
);