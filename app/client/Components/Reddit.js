
var React = require('react')
var ReactDOM = require('react-dom')
var Search = require( '../Components/Search')
import axios from 'axios'
import SubredditUI from '../Components/SubredditUI'


var Reddit = React.createClass({
	getInitialState() {
		return {searchBar:'',
				list: []}
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	onUpdateSearch (event) {
		this.setState({searchBar:event.target.value})
		console.log(event.target.value)

		axios.get('/search', {
			params: {
				search: this.state.searchBar
			}
		})
		.then( response => {
			console.log('RESPONSE!',response.data)
			console.log('BEFORE AND AFTER',response.data.data.after)
			var searchBar = response.data.data.children[0].data.subreddit
			var list =[];
			var next = response.data.data.after;
			var resArr = response.data.data.children

			resArr.map((item)=> {
				list.push(item.data)
			})

			this.setState({
				list:list
			})
		})
		.catch (response => {
			console.log('error',response)
		})

	},

	handleSubmitLocation(event) {
			console.log('handleSubmitLocation')	
	},

	render () {
		return (

			<div>
			<div>
			<Search 
			onUpdateSearch={this.onUpdateSearch}
			handleSubmitLocation={this.handleSubmitLocation}
			searchBar={this.state.searchBar}
			/>
			</div>
			<div>
			<SubredditUI onUpdateSearch={this.onUpdateSearch}
			list={this.state.list} 
			searchBar={this.state.searchBar}/>
			</div>
			</div>

		)
	}
})

module.exports = Reddit;
		// getRedditInfo={this.getRedditInfo}