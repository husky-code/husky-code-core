import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Question from './scenes/Question';
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
            	<Question/>
            	<Route exact={true} path="/" component={Question}/>
        	</div>
    	);
	}
}

export default App;