import React from 'React';
import PropTypes from 'prop-types';
import './index.css';

class ItemData extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="item">
				<div className="data-field primary-field">
					<span>{this.props.data[this.props.primaryField]}</span>
				</div>
				{Object.keys(this.props.data).map((field) => 
					field !== this.props.primaryField ?
						<div className="data-field">
							<span>{this.props.data[field]}</span>
						</div> : null
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