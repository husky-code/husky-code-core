import React from 'react';
import NavBar from '../../components/NavBar';
import SelectYear from './components/SelectYear';
import SwitchTab from './components/SwitchTab';
import QuestionInfo from './components/QuestionInfo';
import CodeEditor from './components/CodeEditor';

class Question extends React.Component {
	render() {
		return (
			<div className="select-bar-container">
				<NavBar/>
				<SelectYear/>
				<SwitchTab/>
				<div className="body-no-margin">
					<QuestionInfo/>
					<CodeEditor/>
				</div>
			</div>
		);
	}
}

export default Question;