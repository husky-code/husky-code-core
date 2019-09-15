import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

class LinkTo extends React.Component {
	render() {
		return (
			<div>
				<Link to={this.props.to} className={this.props.className}>{this.props.inner}</Link>
			</div>
		);
	}
}

LinkTo.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	inner: PropTypes.node.isRequired
}

export default LinkTo;