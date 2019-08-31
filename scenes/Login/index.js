import React from 'react';
import LinkTo from '../../components/LinkTo';
import { auth } from '../../services/auth';
import './index.css';

// TODO: convert to generic UserForm component with routing between login and register?
class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			netid: '',
			password: '',
			errorMessage: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.renderFormInput = this.renderFormInput.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		this.setState({errorMessage: null});
		// TODO: error handling?
		// TODO: route to dashboard
		if (this.state.errorMessage === null) {
			auth.login({
				netid: this.state.netid,
				passwd: this.state.password
			}).then(res => {
				// TODO: Store dispatch
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
						{this.renderFormInput("password", "field", "Password", "required")}
					</div>
					{this.state.errorMessage !== null ? <p className="error-message">{this.state.errorMessage}</p> : null}
					<div className="login-submit">
						<input type="submit" className="login-button" value="Submit" />
					</div>
				</form>
				<LinkTo to="/register" className="from-form" inner={<p>New user? Click <u>here</u> to register</p>} />
			</div>
		);
	}
}

export default Login;