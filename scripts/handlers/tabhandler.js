window.onload=function(){
   var mycode = document.getElementById('tab-mycode');
	mycode.style.backgroundColor = 'black';
	mycode.style.color = 'white';
}



function switchTab(tab) {
	// parse tab id, switch to that tab's content
	document.querySelector("#window").src = "./pages/" + tab + ".html";
	var tabName = "tab-" + tab;
	var selectedTab = document.getElementById(tabName);
	var all = document.getElementsByClassName('switch-tab');
	for (var i = 0; i < all.length; i++) {
		all[i].style.backgroundColor = 'white';
  		all[i].style.color = 'black';
	}
	selectedTab.style.backgroundColor = 'black';
	selectedTab.style.color = 'white';
}
