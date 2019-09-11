import React from 'react';
import NavBar from '../../components/NavBar';

class Problems extends React.Component {
	constructor(props) {
		super(props);
		// TODO: add to Redux store?
		this.state = {
			course: '',
			categories: [],
			problems: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div className="select-bar-container">
				<NavBar/>
			</div>
		);
	}
}

export default Problems;