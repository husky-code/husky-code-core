import React from 'react';

class NavItem extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<p className="nav-item">{this.props.value}</p>
			</div>
		);
	}
}

export default NavItem;