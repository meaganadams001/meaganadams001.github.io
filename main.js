console.log("linked"); 

var bold;

window.onload = get_bold(); 

function get_bold() {

	bold = document.getElementsByTagName('bold');
}

function hover() {
	for (var i = 0; i < bold.length; i++ ) {

		bold[i].style.color = "aqua";

	} // ends loop
} // ends function

function away() {
	for (var i = 0; i < bold.length; i++ ) {

		bold[i].style.color = "pink";

	} // ends loop
} // ends function