import React from 'react'

import ApplicationBar from './ApplicationBar';
import WelcomeView from './WelcomeView';
import SubmitArticle from './SubmitArticle';
import ViewArticle from './ViewArticle';
import ListArticles from './ListArticles';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ApplicationBar/>
				<Router>
					<div>
						<Route exact path="/" render={() => <Redirect to="/welcome" />} />
						<Route exact path="/welcome" component={WelcomeView} />
						<Route exact path="/articles/" component={ListArticles} />
						<Route exact path="/articles/new" component={SubmitArticle} />
						<Route exact path="/articles/:link/details" component={ViewArticle} />
					</div>
				</Router>
			</div>
		)
	}
}