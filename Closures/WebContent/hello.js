/**
 * 
 */
function youSayGoodbye() {
	alert("Goodbye!");
	function andISayHello() {
		alert("Hello!");
	}
	return andISayHello;
}
var something = youSayGoodbye();
something();