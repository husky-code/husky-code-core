import React from 'React';
import PropTypes from 'prop-types';
import ListItem from '../../../../components/ListItem';
import './index.css';

class TopicList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topics: this.props.topics
		};
	}
	render() {
		return (
			<div>
				{this.state.topics.map((topic) => 
					<ListItem className="topic-listitem" data={topic} linkable={true} to="/"/>
				)}
			</div>
		);
	}
}

TopicList.propTypes = {
	topics: PropTypes.array.isRequired
}

export default TopicList;