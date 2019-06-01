import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './components/NavItem';
import NavImg from './components/NavImg';
import NavHeader from './components/NavHeader';

class NavBar extends React.Component {
	renderNavItem(str) {
		return <NavItem value={str}/>
	};
	renderNavImg(str) {
		return <NavImg path={str}/>
	};
	renderNavHeader(str) {
		return <NavHeader value={str}/>
	};
	render() {
		return (
			<div className="header navbar-container">
				<div className="navbar-left-container">
					{this.renderNavImg("./images/husky_code_icon.JPG")}
					{this.renderNavHeader("Husky Code")}
				</div>
				<div className="navbar-right-container">
					{this.renderNavImg("./images/user_icon_template.JPG")}
					{this.renderNavItem("Dashboard")}
					{this.renderNavItem("Interview Prep")}
					{this.renderNavItem("Discussion")}
					{this.renderNavItem("Problems")}
				</div>
			</div>
		);
	}
}

export default NavBar;