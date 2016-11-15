import React from 'react'
import axios from 'axios'
import CommentsUI from '../Components/CommentsUI'
// import SubRedditUI from '../Components/subRedditUI'

const Comments = React.createClass ({

	getInitialState() {
		return {title: '',comments: []}
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
		// console.log('SUB COMMENTS',response.data)
		console.log('commentsResponse',response.data[1].data.children[0].data.replies.data.children)
		console.log('COMMENTS',response.data[1].data.children)
		var arr = response.data[1].data.children
		var title = response.data[0].data.children[0].data.title;

    //recursive call to get all replies in comments tree
	  function getCommentsFromArray(arr) {
    var finalArr = [];

    arr.map(function(item) {
      if (typeof item !== 'undefined') {
        finalArr.push(item.data.body)
        if (typeof item.data.replies !== 'undefined' && item.data.replies !== '') {
         finalArr.push(getCommentsFromArray(item.data.replies.data.children));
        }
      }
    });
    return finalArr;
  }

   var comments = getCommentsFromArray(arr);
		this.setState({
			title: title,
			comments: comments
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