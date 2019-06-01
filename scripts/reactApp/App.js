import React from 'react';
import ReactDOM from 'react-dom';
import ReusableButton from './components/ReusableButton';
import NavBar from './components/NavBar';
import QuestionPage from './components/QuestionPage';
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
            	<NavBar/>
            	<QuestionPage/>
        	</div>
    	);
	}
}

export default App;