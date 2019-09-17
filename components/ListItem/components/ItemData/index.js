import React from 'React';
import PropTypes from 'prop-types';
import './index.css';

class ItemData extends React.Component {
	constructor(props) {
		super(props);
	}
	// TODO: formatting, CSS styling
	render() {
		return (
			<div className="item">
				<span className="data-field primary-field">{this.props.data[this.props.primaryField]}</span>
				{Object.keys(this.props.data).map((field) => 
					field !== this.props.primaryField ?
						<span className="data-field">{this.props.data[field]}</span> : null
				)}
			</div>
		);
	}
}

ItemData.propTypes = {
	data: PropTypes.object.isRequired,
	primaryField: PropTypes.string.isRequired
};

export default ItemData;