var React = require('react')
var ReactDOM = require('react-dom')

const subRedditUI = (props) => (

	<div>
		<div className='jumbotron text-center'>
			<h1>{props.searchBar}</h1>
			{props.list.map((name,i) => (
				<div className='subReddits' key={i}>
					<ul>
						<li>{postTitle}{postContent}</li>
					</ul>
				</div>
				)
			)}
		<button>Load More</button>
	</div>



)



module.exports = subRedditUI