function switchTab(tab) {
	// parse tab id, switch to that tab's content
	var frame = document.querySelector("#window");
	var path = "./pages/" + tab + ".html";
	frame.src = path;
}