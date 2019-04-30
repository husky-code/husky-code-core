function getQuestion(questionID) {
	var http = new XMLHttpRequest();
	var url = "https://someurl.link/page";
	var params = "id=" + questionID;
	http.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				// retrieve question, tag info, category, etc.
			} else {
				// return "could not load question, error code [...]"
			}
		}
	};
	http.open("GET", url + "?" + params, true);
	http.send();
}