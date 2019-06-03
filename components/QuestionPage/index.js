import React from 'react';
import SelectYear from './components/SelectYear';
import SwitchTab from './components/SwitchTab';
import QuestionInfo from './components/QuestionInfo';
import CodeEditor from './components/CodeEditor';

class QuestionPage extends React.Component {
	render() {
		return (
			<div className="select-bar-container">
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

export default QuestionPage;