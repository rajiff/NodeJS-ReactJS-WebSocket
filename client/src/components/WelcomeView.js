import React from 'react'

import ListArticles from './ListArticles';

export default class WelcomeView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Welcome View</h2>
				<ListArticles/>
			</div>
		)
	}
}