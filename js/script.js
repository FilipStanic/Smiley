var username


function hello() {
	if (username) {
		alert ('Hello again, ' + username + '!!');
	} else {
		username = prompt ('What is your name?');
		if (username)
			alert ('Hello ' + username + ', nice to meet you!');
	}
}


function smile() {
	document.getElementById("imageOne").src = "images/myFace_smile.png";
	document.getElementById("smileText").innerHTML = "Im happy Again!";
}


function frown() {
	document.getElementById("imageOne").src = "images/myFace.png";
	document.getElementById("smileText").innerHTML = "Oh Nyoo!";
}