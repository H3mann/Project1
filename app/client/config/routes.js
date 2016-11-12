var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
var Main = require('../Components/Main')
import Reddit from '../Components/Reddit'
import SubReddit from '../Components/SubReddit'
import Comments from '../Components/Comments'


var routes = (

<Router history={browserHistory}>
	<Route path='/' component={Main}>
	<IndexRoute component={Reddit}/>
	</Route>
	<Route path='/subReddit/:searchbar' component={SubReddit}/>
	<Route path='/Comments/*' component={Comments}/>
</Router>
)

 module.exports = routes
	
