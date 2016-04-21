import React, { Component } from 'react'
import {Router, Route, browserHistory, hashHistory} from 'react-router'

import Layout from './components/Layout'
import Home from './components/Pages/Home'
import Signup from './components/Pages/Signup'
import Contact from './components/Pages/Contact'

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={Layout}>
          <Route path="/" component={Home} />
          <Route path="/about/(:user)" component={Signup} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}


