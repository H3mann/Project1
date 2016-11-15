var React = require('react');
var ReactRouter = require('react-router');
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
var Main = require('../Components/Main')
import Reddit from '../Components/Reddit'
import SubReddit from '../Components/Render'
import Comments from '../Components/Comments'
import MaterialUIAutocomplete from '../Components/AutoComplete'

var routes = (

<Router history={browserHistory}>
	<Route path='/' component={Main}>
	<IndexRoute component={Reddit}/>
	</Route>
	<Route path='/subReddit/:searchbar' component={SubReddit}/>
	<Route path='/Comments/*' component={Comments}/>
	<Route path='/autocomplete/' component={MaterialUIAutocomplete}/>
</Router>
)

 module.exports = routes
	
