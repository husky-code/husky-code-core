function loadQuestion(questionID) {
	var http = new XMLHttpRequest();
	var url = "";
	var param = "?id=" + questionID;
	http.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				// retrieve question
			} else {
				// return "could not load question"
			}
		}
	};
	http.open("GET", url + param, true);
	http.send();
}