import React from 'React';
import PropTypes from 'prop-types';
import LinkTo from '../LinkTo';
import ItemData from './components/ItemData';
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
		this.setState({inner: <ItemData data={this.props.data} primaryField="name"/>});
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
	data: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.object
	]).isRequired,
	linkable: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
}

export default ListItem;