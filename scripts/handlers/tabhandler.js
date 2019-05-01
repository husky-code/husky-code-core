function switchTab(tab) {
	// parse tab id, switch to that tab's content
	var path = "./pages/" + tab + ".html";
	document.querySelector("#window").src = path;
}