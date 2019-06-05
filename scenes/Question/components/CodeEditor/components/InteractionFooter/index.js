import React from 'react';
import ReactDOM from 'react-dom';
import ReusableButton from '../../../../../../components/ReusableButton';

class InteractionFooter extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var submitcode = document.getElementById("submitcode");
		ReactDOM.findDOMNode(submitcode).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(submitcode).style.color = 'white';
		
	}
	renderReusableButton(str, reusableClass) {
		return <ReusableButton value={str} nodeVal={str.toLowerCase().replace(/ /g, "")} nodeClass={reusableClass}/>;
	};
	render() {
		return (
			<div id="interaction-footer">
				<span className="interaction-footer-small"><span id="runtime"><b>Runtime</b>: 49 ms</span>, <span id="memory-usage">
					<b>Memory Usage</b>: 38.4 MB</span></span>
				{this.renderReusableButton("Submit Code", "code-button")}
				{this.renderReusableButton("Run Code", "code-button")}
			</div>
		);
	}
}

export default InteractionFooter;