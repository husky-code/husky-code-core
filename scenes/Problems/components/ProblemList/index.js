import React from 'React';
import LinkTo from '../../../../components/LinkTo';
import './index.css';

class ProblemList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			problems: [
				{
					name: '',
					difficulty: '',
					topic: '',
					lang: ''
				}
			]
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			this.state.problems.map((problem) => {
				
			});
		);
	}
}

export default ProblemList;