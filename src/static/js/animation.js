(function ($) {
	"use strict";
	const imagesPath = "images/";
	let imageNames = ["jar", "spoon", "strawberry"],
		images = [],
		imagesObj = {},
		$oui = $("<div class='oui'><div class='oui__close'/></div>"),
		$imgTempl = $("<img class='oui__img'/>"),
		$imgBox = $("<div class='oui__img-box'>").appendTo($oui);

	$(imageNames).each(function () {
		let name = this,
			src = imagesPath + name + ".png",
			imgClass = "oui__img-" + name,
			$image = $imgTempl.clone().attr("src", src).addClass(imgClass),
			image = $image.get(0);
		images.push(image);
		imagesObj[name] = $image;
	});

	$(images).appendTo($imgBox);

	$(document).ready(function(){
		$oui.imagesLoaded().done( { background: true }, function() {
			var timeLine = new TimelineLite();
			console.warn("load");
			$oui.appendTo($(document.body));
			timeLine.to($imgBox, 2, {opacity: 1})
				.to(imagesObj["spoon"], 1, {bottom: 700, left: 100, "z-index": 2 })
				.to(imagesObj["spoon"], 1, {bottom: 267, left: 358, rotation: "-26deg"});
		});		
	});	


}(jQuery));