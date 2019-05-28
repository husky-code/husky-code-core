import React from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as editor from 'monaco-editor/esm/vs/editor/editor.main';
import './index.css';

const code = `WELCOME to monaco editor`;

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
      		theme: 'vs-dark',
      		acceptSuggestionOnEnter: true ,
      		acceptSuggestionOnCommitCharacter: true,
      		autoClosingBrackets: '['| '{',
    	};
		return (
			<div className="interaction-container">
				<div id="code-editor-container">
					<MonacoEditor
        				height="450px"
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
				<div className="footer-container"></div>
			</div>
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
							<a id="question-completion">Incomplete</a>
					  	</div>
					  	<div className="question-name-container">
						 	<a id="question-name">favoriteLetter</a>
					  	</div>
					  	<div className="question-diffculty">
							<a id="question-difficulty">Diffculty: EASY</a>
					  	</div>
				   	</div>
					<div className="question-subject-container">
				   		<p/>
					</div>
					<div className="question-author-container">
						<div>
							<a href="" id="question-author"> </a>
						</div>
						<div>
							<a href="" id="question-time"> </a>
						</div>
					</div>
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
					<div className="tab-footer-container">
						<div className="tab"></div>
						<div className="tab"></div>
						<div className="tab"></div>
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
		return <Tab value={str} nodeVal={str.toLowerCase().replace(/ /, "")}/>
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
	render() {
		return (
			<div className="navbar-item-container">
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