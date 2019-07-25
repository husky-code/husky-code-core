import React from 'react';
import Actions from '../../actions';
import Store from '../../store';

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
		}
	}
	onSubmit(e) {
		e.preventDefault();
		Actions.register({
			netid: this.state.netid,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			class: this.state.class,
			passwd: this.state.password
		});
	}
	onNetIDChanged(e) {
		this.setState({netid: e.target.value});
	}
	onFirstNameChanged(e) {
		this.setState({firstname: e.target.value});
	}
	onLastNameChanged(e) {
		this.setState({lastname: e.target.value});
	}
	onClassChanged(e) {
		this.setState({class: e.target.value});
	}
	onPasswordChanged(e) {
		this.setState({password: e.target.value});
	}
	onConfirmPasswordChanged(e) {
		this.setState({confirmPassword: e.target.value});
	}
	render() {
		return (
			<div>
				<form className="login" onSubmit={this.onSubmit.bind(this)}>
					<div className="login-fields">
						<input
							type="text"
							className="field"
							placeholder="NetID"
							onChange={this.onNetIDChanged.bind(this)}
							required="required"
						/>
						<input
							type="text"
							className="field"
							placeholder="First Name"
							onChange={this.onFirstNameChanged.bind(this)}
							required="required"
						/>
						<input
							type="text"
							className="field"
							placeholder="Last Name"
							onChange={this.onLastNameChanged.bind(this)}
							required="required"
						/>
						<input
							type="text"
							className="field"
							placeholder="Class"
							onChange={this.onClassChanged.bind(this)}
							required="required"
						/>
						<input
							type="password"
							className="field"
							placeholder="Password"
							onChange={this.onPasswordChanged.bind(this)}
							required="required"
						/>
						<input
							type="password"
							className="field"
							placeholder="Confirm Password"
							onChange={this.onConfirmPasswordChanged.bind(this)}
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