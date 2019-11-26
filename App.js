import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Question from './scenes/Question';
import Discussion from './scenes/Discussion';
import InterviewPrep from './scenes/InterviewPrep';
import Dashboard from './scenes/Dashboard';
import Problems from './scenes/Problems';
import Login from './scenes/Login';
import Register from './scenes/Register';
import './index.css';

class App extends React.Component {
	render() {
    	return (
        	<div className="layout">
            	<Route exact={true} path="/"
            		render={(props) => <Question {...props} />}/>
            	<Route path="/discussion" 
            		render={(props) => <Discussion {...props} />}/>
            	<Route path="/interviewprep" 
            		render={(props) => <InterviewPrep {...props} />}/>
            	<Route path="/dashboard" 
            		render={(props) => <Dashboard {...props} />}/>
            	<Route path="/problems"
            		render={(props) => <Problems {...props} />}/>
            	<Route path="/login" 
            		render={(props) => <Login {...props} />}/>
            	<Route path="/register" 
            		render={(props) => <Register {...props} />}/>
        	</div>
    	);
	}
}

export default App;