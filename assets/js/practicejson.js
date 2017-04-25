
$(document).ready(function() {

	

	$.getJSON("https://raw.githubusercontent.com/icusick/web_group_project_2/master/inventory.json", function(data){
		
		console.log(data)
		var cakes = [];
		var other = [];
		data.forEach(function(element){
			console.log(element.type)
			if (element.type === "Cake") {
				cakes.push(element)
			} else if (element.type === "Other") {
				other.push(element)
			}
		})
		console.log(cakes)
		console.log(other)

		var stringifyCakes = cakes.map(function (el){
			return "<div><h2 class='customize-labels'>" + el.name + "</h2><p>" + el.description + "</p></div>";
		});
		console.log(stringifyCakes)
		
		$( "div.cakes" )
  		.html(stringifyCakes);

		var stringifyOther = other.map(function(el){
			return "<div><h2 class='customize-labels'>" + el.name + "</h2><p>" + el.description + "</p></div>";
		});
		console.log(stringifyOther)

		$("div.other-menu-items")
		.html(stringifyOther)
	});

	

	// String(object) or JSON.stringify

});