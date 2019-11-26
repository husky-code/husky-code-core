import React from 'react';

class NavHeader extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<p id="nav-title">{this.props.value}</p>
			</div>
		);
	}
}

export default NavHeader;