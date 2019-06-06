import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Question from './scenes/Question';
import Discussion from './scenes/Discussion';
import InterviewPrep from './scenes/InterviewPrep';
import Dashboard from './scenes/Dashboard';
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
            	<Route path="/interviewprep" component={InterviewPrep}/>
            	<Route path="/dashboard" component={Dashboard}/>
        	</div>
    	);
	}
}

export default App;