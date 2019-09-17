import React from 'React';
import ListItem from '../../../../components/ListItem';
import './index.css';

class ProblemList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			problems: this.props.problems
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}
	render() {
		return (
			<div>
				{this.state.problems.map((problem) => 
					<ListItem className="problem-list-container" data={problem} linkable={true} to="/"/>
				)}
			</div>
		);
	}
}

export default ProblemList;