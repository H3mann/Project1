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

		axios.get ('/redditInfo', {
				params: {
				
				}
		})
		.then (response => {
		

		

			this.setState({
				
			})
	}),



	render () {

	return (
		<div>
		hello
		</div>
	)

	}





})

module.exports = SubReddit;
