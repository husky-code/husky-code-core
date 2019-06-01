import React from 'react';
import ReactDOM from 'react-dom';

class NavImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			idName: this.props.path.substr(
				this.props.path.search("./images/")+"./images/".length
			).replace(/_|.JPG|.jpg/g, "")
		}
	}
	render() {
		return (
			<div className="navbar-item-container" id={this.state.idName}>
				<img src={this.props.path}/>
			</div>
		);
	}
}

export default NavImg;