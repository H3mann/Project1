
var React = require('react')
var ReactDOM = require('react-dom')
var Search = require( '../Components/Search')
import axios from 'axios'
import SubredditUI from '../Components/Render'
import SubReddit from '../Components/SubReddit'


var Reddit = React.createClass({
	getInitialState() {
		return {searchBar:'',
				list: [],
				next: ''}
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
			var next = response.data.data.after;
			var list = []
			var resArr = response.data.data.children

			resArr.map((item)=> {
				list.push(item.data)
			})

			this.setState({
				list:list,
				next: next
			})

			console.log('state in onUpdateSearch',this.state.list)
		})
		.catch (response => {
			console.log('error',response)
		})
	},

	handleSubmitLocation(event) {
		console.log('handleSubmitLocation')	
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
			console.log('nexxt in next',next)
			var nextArr = response.data.data.children

			nextArr.map(item => {
				this.state.list.push(item.data)
			})	

			var list = this.state.list.slice(28,this.state.list.length);

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
				searchBar={this.state.searchBar}
				next={this.next}/>
			</div>
		</div>

		)
	}
})

module.exports = Reddit;
		// getRedditInfo={this.getRedditInfo}