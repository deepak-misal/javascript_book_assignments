/**
 * 
 */
function drawText() {
  document.querySelector("p").textContent += "#\n";
}
var intervalID = setInterval(drawText, 2000);