/**
 * 
 */
function stopWatch() {
	var startTime = Date.now();
	function getDelay() {
		var elapsedTime = Date.now() - startTime;
		alert(elapsedTime);
	}
	return getDelay;
}
var timer = stopWatch();
// do something that takes some time
for (var i = 0; i < 1000000; i++) {
	var foo = Math.random() * 10000;
}
// call the returned function
timer();