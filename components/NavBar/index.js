import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavItem from './components/NavItem';
import NavImg from './components/NavImg';
import NavHeader from './components/NavHeader';
import './index.css';

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
					<Link to="/dashboard" className="inline-link">{this.renderNavItem("Dashboard")}</Link>
					<Link to="/interviewprep" className="inline-link">{this.renderNavItem("Interview Prep")}</Link>
					<Link to="/discussion" className="inline-link">{this.renderNavItem("Discussion")}</Link>
					<Link to="/" className="inline-link">{this.renderNavItem("Problems")}</Link>
				</div>
			</div>
		);
	}
}

export default NavBar;