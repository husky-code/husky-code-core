import React from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as editor from 'monaco-editor/esm/vs/editor/editor.main';
import InteractionFooter from './components/InteractionFooter';

const code = `Type your code here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;

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

export default CodeEditor;