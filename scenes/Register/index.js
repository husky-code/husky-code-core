import React from 'react';
import { login, register } from '../../services/api';
import Store from '../../store';
import './index.css';

class Register extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			netid: '',
			firstname: '',
			lastname: '',
			class: '',
			password: '',
			confirmPassword: '',
			errorMessage: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		register({
			netid: this.state.netid,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			class: this.state.class,
			passwd: this.state.password
		});
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div className="user-box">
				<form className="login" onSubmit={this.onSubmit}>
					<div className="user-fields">
						<input
							type="text"
							className="field"
							name="netid"
							onChange={this.handleChange}
							placeholder="NetID"
							required="required"
						/>
						<input
							type="text"
							className="field"
							name="firstname"
							onChange={this.handleChange}
							placeholder="First Name"
							required="required"
						/>
						<input
							type="text"
							className="field"
							name="lastname"
							onChange={this.handleChange}
							placeholder="Last Name"
							required="required"
						/>
						<input
							type="text"
							className="field"
							name="class"
							onChange={this.handleChange}
							placeholder="Class"
							required="required"
						/>
						<input
							type="password"
							className="field"
							name="password"
							onChange={this.handleChange}
							placeholder="Password"
							required="required"
						/>
						<input
							type="password"
							className="field"
							name="confirmPassword"
							onChange={this.handleChange}
							placeholder="Confirm Password"
							required="required"
						/>
					</div>
					{
						this.state.errorMessage !== null ? <p style={{color: "red"}}>{this.state.errorMessage}</p> : null
					}
					<input type="submit" className="login-button" value="Create Account" />
				</form>
			</div>
		);
	}
}

export default Register;