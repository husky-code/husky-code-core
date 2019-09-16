import React from 'React';
import PropTypes from 'prop-types';
import LinkTo from '../LinkTo';
import './index.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			inner: 'default'
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		// TODO: display all available data per list item in one line
		this.setState({inner: <p>{this.state.data.name}</p>});
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<LinkTo className={this.props.className} to={this.props.to} inner={this.state.inner}/>
		);
	}
}

ListItem.propTypes = {
	className: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	linkable: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
}

export default ListItem;