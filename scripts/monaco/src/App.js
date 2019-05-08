import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as editor from 'monaco-editor/esm/vs/editor/editor.main';

const code = `WELCOME to monaco editor
`;

class App extends React.Component {
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
      <MonacoEditor
        height="500px"
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
    );
  }
}

render(
  <App />,
  document.querySelector('#code-editor-container')
);

export default App;