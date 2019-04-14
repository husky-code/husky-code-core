function load() {
	var http = new XMLHttpRequest();
	var url = "https://httpbin.org/get";
	http.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			document.getElementById("anchor").innerHTML = json.origin + "\n" + json.url;
		}
	};
	http.open("GET", url, true);
	http.send();
}