
var React = require( 'react');
var Router = require('react-router');
var Link = Router.Link;

var CommentsUI = (props) => (

	<div>
		{props.comments.map((comment,i) =>
			<div style={divStyles}>	
				<span key={i}>{comment}</span>
			</div>
		)}
	</div>
)

export default CommentsUI

var divStyles = {
		fontFamily: 'arial', fontSize: '16px', 
		padding:'12px', width: '1000px', 
		border:'2px solid rgb(0, 172, 237',margin:'15px',
		backgroundColor: 'rgb(240,255,255)'}

// width: 620px;
//     border: 2px solid rgb(0, 172, 237);
//    	padding: 15px;
//    	font-family: ;
//     margin: 15px;
// 	font-family: arial;
// 	background-color: rgb(240,255,255);