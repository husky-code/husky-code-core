import React from 'react';
import ReactDOM from 'react-dom';
import ReusableButton from '../../../../components/ReusableButton';

class SwitchTab extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		var mycode = document.getElementById('mycode');
		ReactDOM.findDOMNode(mycode).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(mycode).style.color = 'white';
	}
	renderReusableButton(str, reusableClass) {
		return <ReusableButton value={str} nodeVal={str.toLowerCase().replace(/ /g, "")} nodeClass={reusableClass}/>;
	};
	render() {
		return (
			<div className="switch-tab-container">
				<div className="switch-tab-item-container">
					{this.renderReusableButton("Timer", "switch-tab")}
				</div>
				<div className="switch-tab-item-container">
					{this.renderReusableButton("Solutions", "switch-tab")}
				</div>
				<div className="switch-tab-item-container">
					{this.renderReusableButton("Discussion", "switch-tab")}
				</div>
				<div className="switch-tab-item-container">
					{this.renderReusableButton("My Code", "switch-tab")}
				</div>
			</div>
		);
	}
}

export default SwitchTab;