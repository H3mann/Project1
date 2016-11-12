import React from 'react'
import axios from 'axios'
import CommentsUI from '../Components/CommentsUI'
import SubRedditUI from '../Components/subRedditUI'

const Comments = React.createClass ({

	getInitialState() {
		return {
						comments:[],title: ''}
	},
//api call to fetch comments
	getComments() {
	var queryComments = this.props.params.splat
	console.log(queryComments)
		axios.get('/redditComments', {
			params:{
				queryComments:queryComments,
		}
	})
	.then (response => {
		console.log('COMMENTS',response.data[1].data.children)
		var arr = response.data[1].data.children
		var title = response.data[0].data.children[0].data.title;
		var comments = [];
		for (var i = 0; i < arr.length; i++) {
			comments.push(arr[i].data.body);
		}

		this.setState({
			comments: comments,
			title: title
		})

	})
		.catch (response => {
			console.log('error',response)
		})
	},

	componentWillMount () {
		this.getComments()
	},

	render () {
		return (
			<div>
				<h1 className='jumbotron' style={{fontFamily: 'Raleway'}}>{this.state.title} </h1>
				<CommentsUI comments={this.state.comments}/>
			</div>
		)
	}

})

export default Comments