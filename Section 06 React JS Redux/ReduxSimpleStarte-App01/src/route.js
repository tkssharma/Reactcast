import {Route,IndexRoute} from  'react-router '
import React  from  'react '




export default(
	<Router>
	<Route path="/" component={App}>
	<IndexRoute component={PostsIndex} />
	<Route path="posts/new" component={PostsNew}/>
	<Route path="posts/:id" component={PostsShow}/>
	</Route>
	</Router>

	);