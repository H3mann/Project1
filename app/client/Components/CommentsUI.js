
var React = require( 'react');
var Router = require('react-router');
var Link = Router.Link;

var CommentsUI = (props) => (

	<div>
		{props.comments.map((comment,i) =>
			<div style={divStyles} key={i}>	
				<span style={{padding:'15px'}}>{comment}</span>
			</div>
		)}
	</div>
)
export default CommentsUI
var divStyles = {padding: '15px',fontFamily: 'arial', fontSize: '16px'}
