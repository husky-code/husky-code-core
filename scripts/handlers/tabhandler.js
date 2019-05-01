function switchTab(tab) {
	// parse tab id, switch to that tab's content
	document.querySelector("#window").src = "./pages/" + tab + ".html";
}