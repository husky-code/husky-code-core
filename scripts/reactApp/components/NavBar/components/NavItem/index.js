import React from 'react';
import ReactDOM from 'react-dom';

class NavItem extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<a className="nav-item">{this.props.value}</a>
			</div>
		);
	}
}

export default NavItem;