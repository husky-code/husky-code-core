function switchTab(tab) {
	// parse tab id, switch to that tab's content
	var frame = document.querySelector("#window");
	if (tab == 'mycode') {
    	frame.src = "./pages/mycode.html";
  	} else if (tab == 'discussion') {
    	frame.src = "./pages/discussions.html";
  	} else if (tab == 'solutions') {
    	frame.src = "./pages/solutions.html";
	} else if (tab == 'timer') {
    	frame.src = "./pages/timer.html";
  	}
}