import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LinkTo from '../../components/LinkTo';
import { auth } from '../../services/auth';
import './index.css';

// TODO: convert to generic UserForm component with routing between login and register?
class Register extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			netid: null,
			firstname: null,
			lastname: null,
			class: null,
			password: null,
			confirmpassword: null,
			errorMessage: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.renderFormInput = this.renderFormInput.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		this.setState({errorMessage: null});
		// TODO: route to home or through login when registered
		if (this.state.password !== this.state.confirmpassword) {
			this.setState({errorMessage: 'Passwords do not match'});
		}
		if (this.state.errorMessage === null) {
			auth.register({
				netid: this.state.netid,
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				class: this.state.class,
				passwd: this.state.password
			}).then(res => {
				// TODO: Store dispatch?
				console.log(res);
			});
		}
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	renderFormInput(type, className, placeholder, required) {
		return <input
			type={type}
			className={className}
			name={placeholder.toLowerCase().replace(/\s+/g, "")}
			onChange={this.handleChange}
			placeholder={placeholder}
			required={required}
		/>
	}
	render() {
		return (
			<div className="user-box">
				<form className="login" onSubmit={this.onSubmit}>
					<div className="user-fields">
						{this.renderFormInput("text", "field", "NetID", "required")}
						{this.renderFormInput("text", "field", "First Name", "required")}
						{this.renderFormInput("text", "field", "Last Name", "required")}
						{this.renderFormInput("text", "field", "Class", "required")}
						{this.renderFormInput("password", "field", "Password", "required")}
						{this.renderFormInput("password", "field", "Confirm Password", "required")}
					</div>
					{this.state.errorMessage !== null ? <p className="error-message">{this.state.errorMessage}</p> : null}
					<div className="login-submit">
						<input type="submit" className="login-button" value="Create Account" />
					</div>
				</form>
				<LinkTo to="/login" className="from-form" inner={<p>Already registered? Click <u>here</u> to login</p>} />
			</div>
		);
	}
}

export default Register;