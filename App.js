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
            	<Route exact={true} path="/"
            		render={(props) => <Question {...props} store={this.props.store}/>}/>
            	<Route path="/discussion" 
            		render={(props) => <Discussion {...props} store={this.props.store}/>}/>
            	<Route path="/interviewprep" 
            		render={(props) => <InterviewPrep {...props} store={this.props.store}/>}/>
            	<Route path="/dashboard" 
            		render={(props) => <Dashboard {...props} store={this.props.store}/>}/>
            	<Route path="/login" 
            		render={(props) => <Login {...props} store={this.props.store}/>}/>
            	<Route path="/register" 
            		render={(props) => <Register {...props} store={this.props.store}/>}/>
        	</div>
    	);
	}
}

export default App;