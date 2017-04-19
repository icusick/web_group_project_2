console.log("linked")

var header = "<div class='header'> <div class='nav-link'> <a href=#>MENU</a> </div> <div class='nav-link'> <a href=#>CUSTOM</a> </div> <div class='nav-link logo'> <img src='./assets/images/fix-logo.png'> </div> <div class='nav-link'> <a href=#>ABOUT</a> </div> <div class='nav-link'> <a href=#>HOURS</a> </div> </div>"

$("div.nav-bar")
	.html(header);


var foot = "<footer class='footer'> <div class='footer-address'> <p>27 MARYLAND PLAZA</p> <p>SAINT LOUIS, MO 63108</p> <div class='footer-hours'> <p>TUES-SAT 7am-7pm, SUN 11am-4pm</p> </div> </div> <img class='footer-image' src='assets/images/fix-logo-white.png'> <div class='footer-contact'> <div class='footer-social'> <img src='assets/images/fix-fbicon.png'> <img src='assets/images/fix-twittericon.png'> <img src='assets/images/fix-instaicon.png'> </div> <p>314-930-3103</p> </div> </footer>"

$( "div.bottom-bar" )
  .html(foot);

$(document).ready(function() {

$(window).on("scroll", function() {
	if ($(this).scrollTop() > 270) {
		// console.log("scrolling?")
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
});



$toggleCakes = $("#cake-button");
$toggleOther = $("#other-button");
// $toggleCake.on('click', function(){
// 	$(".cakes").toggle();
// });
// $toggleOther.on('click', function() {
// 	$(".cakes").toggle();
// })
// $toggleOther.on('click', function() {
// 	console.log('clicked');
// 	$('.cakes').addClass('hidden');
// 	$('.other-menu-items').removeClass('hidden');
// });
// $toggleCakes.on('click', function() {
// 	console.log('clicked');
// 	$('.other-menu-items').addClass('hidden');
// 	$('.cakes').removeClass('hidden');
// });


$toggleOther.on('click', function() {
		$('.cakes').fadeOut(400, function() {
			$('.other-menu-items').fadeIn(400);
		});
});

$toggleCakes.on('click', function() {
		$('.other-menu-items').fadeOut(400, function() {
			$('.cakes').fadeIn(400);
		});
});



$('.custom-form').on('click', 'button', function(event){
	// grab name from the input field
	// alert message to user with their name in it
	// clear the other fields
	// console.log(document.getElementById('name').value )
	event.preventDefault();
	event.stopPropagation();
	var theName = $("#name").val();
	var phonenumber = $("#phonenumber").val();
	var details = $("#details").val();
	window.alert("Thank you " + theName + " for you submission")
	$("#name").val(' ');
	$("#phonenumber").val(' ');
	$("#details").val(' ');
});




});