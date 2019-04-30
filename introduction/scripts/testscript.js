var delta1 = 0, delta2 = 0;
function load() {
	doGet();
	doPost();
}
function doGet() {
	var http = new XMLHttpRequest();
	var url = "https://httpbin.org/get";
	http.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				delta1++;
				var json = JSON.parse(this.responseText);
				document.getElementById("anchor1").innerHTML = "Origin: " + json.origin + "\nURL: " + json.url + "\nDnt: " + json.headers.Dnt 
					+ "\nDelta: " + delta1;
			} else {
				document.getElementById("anchor1").innerHTML = "Could not display from server.";
				delta1 = 0;
			}
		}
	};
	http.open("GET", url, true);
	http.send();
}
function doPost() {
	var http = new XMLHttpRequest();
	var url = "https://httpbin.org/post";
	http.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				delta2++;
				var json = JSON.parse(this.responseText);
				document.getElementById("anchor2").innerHTML = "Posted by user agent: " + json.headers["User-Agent"] + "\nDelta: " + delta2;
			} else {
				document.getElementById("anchor2").innerHTML = "Could not post to server.";
				delta2 = 0;
			}
		}
	};
	http.open("POST", url, true);
	http.send();
}