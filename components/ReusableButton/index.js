import React from 'react';
import ReactDOM from 'react-dom';

class ReusableButton extends React.Component {
	constructor(props) {
		super(props);
		this.switchButton = this.switchButton.bind(this);
	}
	switchButton() {
		var curr = document.getElementById(this.props.nodeVal);
		var all = document.getElementsByClassName(this.props.nodeClass);
		for (var i = 0; i < all.length; i++) {
			ReactDOM.findDOMNode(all[i]).style.backgroundColor = 'white';
  			ReactDOM.findDOMNode(all[i]).style.color = 'black';
		}
		ReactDOM.findDOMNode(curr).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(curr).style.color = 'white';
	}
	render() {
		return (
			<input type="button" value={this.props.value} className={this.props.nodeClass} 
				id={this.props.nodeVal} onClick={this.switchButton}/>
		);
	}
}

export default ReusableButton;