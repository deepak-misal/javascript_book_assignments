/**
 * 
 */
function checkWeight(weight) {
	var text;
	if (weight > 5000) {
		text = "No free shipping for you!";
		alert(text);
	}
	alert(text);
}
checkWeight(4000);