
var React = require('react')
var ReactDOM = require('react-dom')
var Search = require( '../Components/Search')


var Reddit = React.createClass({
	getInitialState() {
		return {searchBar:''}
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	onUpdateSearch (event) {
		this.setState({searchBar:event.target.value})
		console.log(event.target.value)
	},

	handleSubmitLocation(event) {
			console.log('handleSubmitLocation')	
	},

	render () {
		return (
			<Search 
			onUpdateSearch={this.onUpdateSearch}
			handleSubmitLocation={this.handleSubmitLocation}
			searchBar={this.state.searchBar}
			/>
		)
	}
})

module.exports = Reddit;
		// getRedditInfo={this.getRedditInfo}