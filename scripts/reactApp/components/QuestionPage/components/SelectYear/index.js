import React from 'react';
import ReactDOM from 'react-dom';

class SelectYear extends React.Component {
	render() {
		return (
			<div id="dropdown-menu">
				<img src="./images/menubaricon.png" alt="hamburger icon" id="hambuger-icon"/>
				<select id="select-text-indent">
					<option value="">Midterm Spring '09</option>
					<option value="">Midterm Spring '10</option>
					<option value="">Midterm Spring '11</option>
					<option value="">Midterm Spring '12</option>
				</select>
			</div>
		);
	}
}

export default SelectYear;