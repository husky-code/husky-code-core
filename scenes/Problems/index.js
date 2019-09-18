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
			topics: [],
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
	componentDidMount() {
		// Temporary (for dev purposes)
		problemService.getTopics(this.state.course).then(res => {
			console.dir(res);
			this.setState({topics: JSON.parse(res).topics});
		});
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
		if (e.target.name === 'course') {
			problemService.getTopics(this.state.course).then(res => {
				console.dir(res);
				this.setState({topics: JSON.parse(res).topics});
			});
		}
	}
	render() {
		return (
			<div>
				<div className="select-bar-container">
					<NavBar/>
				</div>
				<TopicList/>
				<ProblemList problems={this.state.problems}/>
			</div>
		);
	}
}

export default Problems;