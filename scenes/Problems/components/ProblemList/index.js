import React from 'React';
import ListItem from '../../../../components/ListItem';
import './index.css';

class ProblemList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO: replace with API call
			problems: [
				{
					name: 'favoriteLetter',
					topic: 'Method basics',
					lang: 'Java'
				},
				{
					name: 'pairSums',
					topic: 'Hashing',
					lang: 'Java'
				}
			]
		};
		this.handleChange = this.handleChange.bind(this);
		this.renderProblems = this.renderProblems.bind(this);
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	renderProblems() {
		const problems = this.state.problems;
		return problems.map((problem) => 
			<ListItem className="problem-list-container" data={problem} linkable={true} to="/"/>
		);
	}
	render() {
		return (
			<div>
				{this.renderProblems()}
			</div>
		);
	}
}

export default ProblemList;