function switchTab(tab) {
	// parse tab id, switch to that tab's content
	var frame = document.querySelector("#window");
	if (tab == 'mycode') {
    	frame.src = "/mycode.html";
  	} else if (tab == 'discussion') {
    	frame.src = "/discussions.html";
  	} else if (tab == 'solutions') {
    	frame.src = "/solutions.html";
	} else if (tab == 'timer') {
    	frame.src = "timer.html";
  	}
}