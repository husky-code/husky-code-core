import React from 'react';
import ReactDOM from 'react-dom';

class QuestionInfo extends React.Component {
	render() {
		return (
			<div className="question-info-container">
				<div className="question-header-container">
					<div className="question-title-container">
						<div className="question-completion-container">
							<a id="question-completion">Completed <i className="fas fa-check-circle"></i></a>
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
						<a className="reaction-footer-item">Share</a>
						<a className="reaction-footer-item">Dislikes (9999)</a>
						<a className="reaction-footer-item">Likes (1000)</a>
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionInfo;