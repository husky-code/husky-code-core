import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Question from './scenes/Question';
import Discussion from './scenes/Discussion';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	};
	render() {
    	return (
        	<div className="layout">
            	<Route exact={true} path="/" component={Question}/>
            	<Route path="/discussion" component={Discussion}/>
        	</div>
    	);
	}
}

export default App;