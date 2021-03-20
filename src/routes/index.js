import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} isPrivate />
			</Switch>
		</Router>
	);
}
