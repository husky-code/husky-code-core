import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Question from './scenes/Question';
import Discussion from './scenes/Discussion';
import InterviewPrep from './scenes/InterviewPrep';
import Dashboard from './scenes/Dashboard';
import Login from './scenes/Login';
import Register from './scenes/Register';
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
            	<Route path="/login" component={Login}/>
            	<Route path="/register" component={Register}/>
        	</div>
    	);
	}
}

export default App;