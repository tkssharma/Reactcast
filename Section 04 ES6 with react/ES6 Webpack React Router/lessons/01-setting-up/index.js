import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About  from './modules/About'
import { Router, Route, hashHistory } from 'react-router'

render((
	<Router>
	   <Route path="/"  component={App} />
	   <Route path="/about"  component={About} />
	</Router>
) , document.getElementById('app'));

