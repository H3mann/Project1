var React = require('react')
var ReactDOM = require('react-dom')
// import SubReddit from '../subReddit'
var Router = require('react-router');
var Link = Router.Link;
import Comments from '../Components/Comments'

const SubRedditUI = (props) => (

<div>
	<div>
		<h1 style={{fontFamily:'Raleway', size:'36px'}} className='jumbotron'>{props.searchBar}</h1>
		{props.list.map((list,i) => (
			<div style={style}key={i}>
				<img style={{height:'80px', width:'80px'}} src={list.thumbnail}/>
				<Link to={'/Comments/' + list.permalink}> {list.title} </Link>
			</div>
		)
		)}
	<form onSubmit={props.next}>
		{props.nextArr.map((list,i) => (
			<div style={style} key={i}>
				<img style={{height:'80px', width:'80px'}} src={list.thumbnail}/>
				<Link to={'/Comments/' + list.permalink}> {list.title} </Link>
			</div>
		)
		)}
			<button className='btn btn-block btn-success center-block' type='submit'>Load More</button>

	</form>
</div>
</div>

)
var style = {
		fontFamily: 'arial', fontSize: '26px', 
		padding:'12px', width: '1200px', 
		border:'2px solid rgb(0, 172, 237',margin:'15px',
		backgroundColor: 'rgb(240,255,255)'}

module.exports = SubRedditUI