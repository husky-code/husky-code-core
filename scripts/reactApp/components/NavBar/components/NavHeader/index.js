import React from 'react';
import ReactDOM from 'react-dom';

class NavHeader extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<a id="nav-title">{this.props.value}</a>
			</div>
		);
	}
}

export default NavHeader;