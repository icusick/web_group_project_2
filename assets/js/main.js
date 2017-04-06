console.log("linked")


$(document).ready(function() {

$toggleCake = $("#cake-button");


$toggleCake.on('click', function(){
	$(".cakes").toggle();
});



});