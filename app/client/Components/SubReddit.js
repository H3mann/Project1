import React from 'react';
import axios from 'axios';
import SubRedditUI from './Render'
import { render } from 'react-dom';
import Comments from '../Components/Comments'
var ReactDOM = require('react-dom')

const SubReddit = React.createClass ({

	getInitialState () {
		return {
			list: this.props.list, 
			next: ''}
		},

	next(event) {
		event.preventDefault()
		var queryData = this.state.searchBar
		var nextData = this.state.next
		console.log('nextData',nextData)
		axios.get('/next',{
			params: {
				nextData: nextData,
				queryData: queryData
			}
		})
		.then(response => {
			console.log('NEXT', response)
			var next = response.data.data.after

			for (var i = 0; i < response.data.data.children.length; i++) {
			this.state.list.push(response.data.data.children[i].data)
			}
			console.log('list',list)

			this.setState({
				next: next,
				list: list
			})

		})
		.catch(response => {
			console.log('error',response)
		})
	},

	render () {
	console.log('this',this.state.list)
		return (
			<div>
				<SubRedditUI list={this.state.list}
				next={this.next}
				searchBar={this.state.searchBar}
				 />
			</div>
		)
	}
})

module.exports = SubReddit;
