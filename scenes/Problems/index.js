import React from 'react';
import NavBar from '../../components/NavBar';
import ProblemList from './components/ProblemList';
import './index.css';

class Problems extends React.Component {
	constructor(props) {
		super(props);
		// TODO: add to Redux store?
		// TODO: API call to database to get data for state
		this.state = {
			course: 'CSE 373',
			categories: ['Method basics', 'Hashing'],
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
				},
				{
					name: 'writeHelloWorld',
					topic: 'Method basics',
					lang: 'Java'
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
			<div>
				<div className="select-bar-container">
					<NavBar/>
				</div>
				<ProblemList problems={this.state.problems}/>
			</div>
		);
	}
}

export default Problems;