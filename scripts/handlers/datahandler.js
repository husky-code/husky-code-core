function handleData(url, args, func, requestType) {
	var xhr = new XMLHttpRequest();
	var params = "?";
	args = JSON.stringify(args);
	params += args.replace(/"|{|}/g, "").replace(/,};/g, "&").replace(/:/g, "=").replace(/ /g, "+");
	xhr.onreadystatechange = function() {
		if (this.readystate == 4) {
			if (this.status == 200) {
				func(this);
			} else {
				func(null);
			}
		}
	};
	xhr.open(requestType, url + params, true);
	xhr.send();
}

function getQuestion(xhr) {
	// TODO: replace temp IDs with correct ones
	if (xhr != null) {
		var data = JSON.parse(xhr.responseText);
		document.querySelector("#name").innerHTML = data.name;
		document.querySelector("#author").innerHTML = data.author;
		document.querySelector("#description").innerHTML = data.description;
		document.querySelector("#tags").innerHTML = data.tags; // might require separate parsing
		document.querySelector("#difficulty").innerHTML = data.difficulty;
		// TODO: write test cases file parser
	} else {
		document.querySelector("#description").innerHTML = "Could not load question, please try again later.";
	}
}