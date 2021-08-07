/**
 * 
 */
var xPos = 300;
var yPos = 150;
function sendWarning(x, y) {
	if ((x < xPos) && (y < yPos)) {
		alert("Adjust the position");
	} else {
		alert("Things are fine!");
	}
}