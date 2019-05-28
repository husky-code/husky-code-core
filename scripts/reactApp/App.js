import React from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as editor from 'monaco-editor/esm/vs/editor/editor.main';
import './index.css';

const code = `Type your code here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	};
	render() {
    	return (
        	<div className="layout">
            	<NavBar/>
            	<QuestionPage/>
        	</div>
    	);
	}
}
class QuestionPage extends React.Component {
	render() {
		return (
			<div className="select-bar-container">
				<SelectYear/>
				<SwitchTab/>
				<div className="body-no-margin">
					<QuestionInfo/>
					<CodeEditor/>
				</div>
			</div>
		);
	}
}
class CodeEditor extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		code: '// type your code...',
    	}
  	}
	editorDidMount(editor, monaco) {
    	console.log('editorDidMount', editor, monaco);
    	editor.focus();
  	}
	onChange(newValue, e) {
    	console.log('onChange', newValue, e);
  	}
	render() {
		const options = {
      		selectOnLineNumbers: true,
      		roundedSelection: true,
      		readOnly: false,
      		cursorStyle: 'line',
      		automaticLayout: true,
      		theme: 'vs-light',
      		acceptSuggestionOnEnter: true ,
      		acceptSuggestionOnCommitCharacter: true,
      		autoClosingBrackets: '['| '{',
    	};
		return (
			<div className="interaction-container">
				<div id="code-editor-container">
					<MonacoEditor
        				height="415px"
        				language="javascript"
        				editorDidMount={this.editorDidMount.bind(this)}
        				onChange={this.onChange.bind(this)}
        				value={code}
        				options={options}
        				scrollbar={{
          				// Subtle shadows to the left & top. Defaults to true.
          				useShadows: true,
          				// Render vertical arrows. Defaults to false.
          				verticalHasArrows: true,
          				// Render horizontal arrows. Defaults to false.
          				horizontalHasArrows: true,
          				// Render vertical scrollbar.
          				// Accepted values: 'auto', 'visible', 'hidden'.
          				// Defaults to 'auto'
          				vertical: 'visible',
          				// Render horizontal scrollbar.
          				// Accepted values: 'auto', 'visible', 'hidden'.
          				// Defaults to 'auto'
          				horizontal: 'visible',
          				verticalScrollbarSize: 17,
          				horizontalScrollbarSize: 17,
          				arrowSize: 30,
        				}}
      				/>
				</div>
				<InteractionFooter/>
			</div>
		);
	}
}
class InteractionFooter extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		var submitcode = document.getElementById("submitcode");
		ReactDOM.findDOMNode(submitcode).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(submitcode).style.color = 'white';
		
	}
	renderReusableButton(str, reusableClass) {
		return <ReusableButton value={str} nodeVal={str.toLowerCase().replace(/ /g, "")} nodeClass={reusableClass}/>;
	};
	render() {
		return (
			<div id="interaction-footer">
				<span className="interaction-footer-small"><span id="runtime"><b>Runtime</b>: 49 ms</span>, <span id="memory-usage">
					<b>Memory Usage</b>: 38.4 MB</span></span>
				{this.renderReusableButton("Submit Code", "code-button")}
				{this.renderReusableButton("Run Code", "code-button")}
			</div>
		);
	}
}
class ReusableButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input type="button" value={this.props.value} className={this.props.nodeClass} id={this.props.nodeVal}></input>
		);
	}
}
class QuestionInfo extends React.Component {
	render() {
		return (
			<div className="question-info-container">
				<div className="question-header-container">
					<div className="question-title-container">
						<div className="question-completion-container">
							<a id="question-completion">Completed <i class="fas fa-check-circle"></i></a>
					  	</div>
					  	<div className="question-name-container">
						 	<a id="question-name">favoriteLetter</a>
							<a className="question-small" id="question-difficulty">Diffculty: <span id="difficulty">EASY</span></a>
					  	</div>
					  	
				   	</div>
					<div className="question-small question-subject-container">
				   		<p id="question-subject">Subject: <u>Scanner</u>, <u>Input</u>, <u>Method basics</u></p>
					</div>
					<div className="question-small question-author-container">
						<p id="question-author">Author: Kasey Champion</p>
						<p id="question-time">01/01/2019</p>
					</div>
					<hr className="question-hrline"/>
				</div>
				<div className="question-content-container">
					<div className="question-description-container">
				   		<p>
				   			Write a method named favoriteLetter that accepts two parameters: a 
				   			Scanner for the console, and a favorite letter represented as a one-letter 
				   			String. The method repeatedly prompts the user until two consecutive words 
				   			are entered that start with that letter. The method then prints a message 
				   			showing the last word typed.
				   		</p>
				   		<p>
				   			You may assume that the user will type a single-word response to each prompt. 
				   			Your code should be case-sensitive; for example, if the favorite letter is a, 
				   			you should not stop prompting if the user types words that start with an A. 
				   			For example, the following logs represent the output from two calls to your method. 
				   			(User input is underlined.)
				   		</p>
					</div>
					<div className="reaction-footer-container">
						<p className="reaction-footer-item">Share</p>
						<p className="reaction-footer-item">Dislikes (9999)</p>
						<p className="reaction-footer-item">Likes (1000)</p>
					</div>
				</div>
			</div>
		);
	}
}
class SwitchTab extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		var mycode = document.getElementById('mycode');
		ReactDOM.findDOMNode(mycode).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(mycode).style.color = 'white';
	}
	renderTab(str) {
		return <Tab value={str} nodeVal={str.toLowerCase().replace(/ /g, "")}/>
	};
	render() {
		return (
			<div className="switch-tab-container">
				{this.renderTab("Timer")}
				{this.renderTab("Solutions")}
				{this.renderTab("Discussion")}
				{this.renderTab("My Code")}
			</div>
		);
	}
}
class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.switchTab = this.switchTab.bind(this);
	}
	switchTab() {
		var tab = document.getElementById(this.props.nodeVal);
		var all = document.getElementsByClassName('switch-tab');
		for (var i = 0; i < all.length; i++) {
			ReactDOM.findDOMNode(all[i]).style.backgroundColor = 'white';
  			ReactDOM.findDOMNode(all[i]).style.color = 'black';
		}
		ReactDOM.findDOMNode(tab).style.backgroundColor = 'black';
		ReactDOM.findDOMNode(tab).style.color = 'white';
	}
	render() {
		return (
			<div className="switch-tab-item-container">
				<input className="switch-tab" type="button" value={this.props.value} 
					id={this.props.nodeVal} onClick={this.switchTab}/>
			</div>
		);
	}
}
class SelectYear extends React.Component {
	render() {
		return (
			<div id="dropdown-menu">
				<img src="./images/menubaricon.png" alt="hamburger icon" id="hambuger-icon"/>
				<select id="select-text-indent">
					<option value="">Midterm Spring '09</option>
					<option value="">Midterm Spring '10</option>
					<option value="">Midterm Spring '11</option>
					<option value="">Midterm Spring '12</option>
				</select>
			</div>
		);
	}
}
class NavBar extends React.Component {
	renderNavItem(str) {
		return <NavItem value={str}/>
	};
	renderNavImg(str) {
		return <NavImg path={str}/>
	};
	renderNavHeader(str) {
		return <NavHeader value={str}/>
	};
	render() {
		return (
			<div className="header navbar-container">
				<div className="navbar-left-container">
					{this.renderNavImg("./images/husky_code_icon.JPG")}
					{this.renderNavHeader("Husky Code")}
				</div>
				<div className="navbar-right-container">
					{this.renderNavImg("./images/user_icon_template.JPG")}
					{this.renderNavItem("Dashboard")}
					{this.renderNavItem("Interview Prep")}
					{this.renderNavItem("Discussion")}
					{this.renderNavItem("Problems")}
				</div>
			</div>
		);
	}
}
class NavItem extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<a className="nav-item">{this.props.value}</a>
			</div>
		);
	}
}
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
class NavHeader extends React.Component {
	render() {
		return (
			<div className="navbar-item-container">
				<a id="nav-title">{this.props.value}</a>
			</div>
		);
	}
}

export default App;