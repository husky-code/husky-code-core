import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LinkTo from '../LinkTo';
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
					<LinkTo to="/" className="inline-link" inner={this.renderNavHeader("Husky Code")} />
				</div>
				<div className="navbar-right-container">
					{this.renderNavImg("./images/user_icon_template.JPG")}
					<LinkTo to="/dashboard" className="inline-link" inner={this.renderNavItem("Dashboard")} />
					<LinkTo to="/interviewprep" className="inline-link" inner={this.renderNavItem("Interview Prep")} />
					<LinkTo to="/discussion" className="inline-link" inner={this.renderNavItem("Discussion")} />
					<LinkTo to="/problems" className="inline-link" inner={this.renderNavItem("Problems")} />
				</div>
			</div>
		);
	}
}

export default NavBar;