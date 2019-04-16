function load() {
	var http = new XMLHttpRequest();
	var url = "https://httpbin.org/get";
	http.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status == 200) {
				var json = JSON.parse(this.responseText);
				document.getElementById("anchor").innerHTML = "Origin: " + json.origin + "\nURL: " + json.url + "\nDnt: " + json.headers.Dnt;
			} else {
				document.getElementById("anchor").innerHTML = "Could not display from server.";
			}
		}
	};
	http.open("GET", url, true);
	http.send();
}