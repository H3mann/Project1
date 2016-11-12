import React from 'react';
import axios from 'axios';
import SubRedditUI from './subRedditUI'
import { render } from 'react-dom';
import Comments from '../Components/Comments'
var ReactDOM = require('react-dom')

const SubReddit = React.createClass ({

	getInitialState () {
		return {
			searchBar: '',
			list: [], 
			next: '',
			nextArr: []}
		},

	getRedditInfo() {
		var queryData = this.props.params.searchbar;
		axios.get('/redditInfo', {
			params: {
			queryData:queryData
			}
		})
		.then (response => {
			console.log('RESPONSE!',response.data)
			console.log('BEFORE AND AFTER',response.data.data.after)
			var searchBar = response.data.data.children[0].data.subreddit
			var list =[];
			var next = response.data.data.after;
			var resArr = response.data.data.children

			for (var i=0; i<resArr.length; i++) {
					list.push(resArr[i].data)
			}

			this.setState({
				searchBar:searchBar,
				list:list,
				next: next
			})
		})
		.catch (response => {
			console.log('error',response)
		})
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
			var nextArr = []
			for (var i = 0; i < response.data.data.children.length; i++) {
			nextArr.push(response.data.data.children[i].data)
			}
			console.log('nextARRR',nextArr)

			this.setState({
				next: next,
				nextArr: nextArr
			})

		})
		.catch(response => {
			console.log('error',response)
		})
	},

	// before(event) {
	// 	event.PreventDefault()
	// 	var queryData = this.state.searchBar
	// 	// var beforeData = this.state.before
	// },

	componentDidMount () {
		this.getRedditInfo();
	},

	render () {
	console.log('this',this.state.nextArr)
		return (
			<div>
				<SubRedditUI list={this.state.list}
				searchBar={this.state.searchBar}
				next={this.next}
				nextArr={this.state.nextArr}
				 />
			</div>
		)
	}
})

module.exports = SubReddit;
