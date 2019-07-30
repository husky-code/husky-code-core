import React from 'react';

class FormInput extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<input
				type={this.props.type}
				className={this.props.className}
				name={this.props.placeholder.toLowerCase().replace(/\s+/g, "")}
				onChange={this.props.handleChange}
				placeholder={this.props.placeholder}
				required={this.props.required}
			/>
		);
	};
}

export default FormInput;