import React from 'react';
import axios from 'axios';

const SubReddit = React.createClass ({

	getInitialState () {
		return { searchBar: '',
						list: []
		}
	},

//api call here

	getRedditInfo (location) {

		var searchBar = this.props.params.searchBar
		axios.get ('/redditInfo', {
				params: {
					searchBar: searchBar,
					subRedditList: subRedditList
				}
		})
		.then (response => {
				console.log(response.data)

				this.setState({
					cityName: cityName,
					list: list
				})
		}),

		componentWillMount () {

			this.getRedditInfo();

		},

	render () {

		return (

			<div>
			<subRedditUI
			searchBar={this.state.searchBar}
			list={this.state.list} />
			
			</div>
		)

	}

})

module.exports = SubReddit;
