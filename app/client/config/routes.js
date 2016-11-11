var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../Components/Main');
import IndexRoute from 'react-router';
import Reddit from '../Components/Reddit'
import SubReddit from '../Components/SubReddit'

var routes = (

<Router history={browserHistory}>
	<Route path='/' component={Reddit}>
	<Route path='subReddit/:searchbar' component={SubReddit}/>

	 
	</Route>

</Router>
)

 module.exports = routes
	
