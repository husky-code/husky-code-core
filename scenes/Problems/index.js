import React from 'react';
import NavBar from '../../components/NavBar';
import ProblemList from './components/ProblemList';
import TopicList from './components/TopicList';
import problemService from '../../services/problems';
import './index.css';

class Problems extends React.Component {
	constructor(props) {
		super(props);
		// TODO: add to Redux store?
		// TODO: API call to database to get data for state
		this.state = {
			course: 'CSE 373',
			currTopic: '',
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
			],
			topics: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		// Temporary (for dev purposes)
		problemService.getTopics(this.state.course).then(res => {
			this.setState({topics: res.topics});
		});
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
		switch (e.target.name) {
			case 'course': {
				problemService.getTopics(this.state.course).then(res => {
					this.setState({topics: res.topics});
				});
			}
			case 'currTopic': {
				problemService.getProblems(this.state.course, this.state.currTopic).then(res => {
					this.setState({problems: res.problems});
				});
			}
		}
	}
	render() {
		return (
			<div className="problems-container">
				<div className="select-bar-container">
					<NavBar/>
				</div>
				<TopicList topics={this.state.topics}/>
				<ProblemList problems={this.state.problems}/>
			</div>
		);
	}
}

export default Problems;