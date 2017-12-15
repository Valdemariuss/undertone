(function ($) {
	"use strict";
	const imagesPath = "images/";
	let imageNames = ["jar", "spoon-half", "spoon", "bg"],
		images = [],
		imagesObj = {},
		$oui = $("<div class='oui'><div class='oui__close'/></div>"),
		$imgTempl = $("<div class='oui__img'/>"),
		$imgBox = $("<div class='oui__img-box'>").appendTo($oui);

	$(imageNames).each(function () {
		let name = this,
			imgClass = "oui__img-" + name,
			$image = $imgTempl.clone().addClass(imgClass),
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
			timeLine.to($imgBox, 2, { opacity: 1 })
				.to(imagesObj["spoon-half"], 0, {display: "none"})
				.to(imagesObj["spoon"], 1, { top: "-25vmin", left: "14vmin", "z-index": 3 })
				.to(imagesObj["spoon"], 1, { top: "1vmin", left: "33vmin", rotation: "32deg" })
				// .to(imagesObj["spoon"], 1, { top: "12vmin", rotation: "55deg" })
				// .to(imagesObj["spoon"], 1, { left: "5vmin" });
				.to(imagesObj["spoon"], 1, { top: "12vmin", left: "2vmin", rotation: "55deg" });

			TweenLite.to(imagesObj["spoon"], 1, { top: "13vmin", left: "-10vmin", rotation: "63deg", delay: 5 });
			TweenLite.to([imagesObj["spoon"], imagesObj["jar"]], 1, { opacity: 0, delay: 5 });
			TweenLite.to(imagesObj["bg"], 3, { opacity: 1, delay: 5 });
		});		
	});	


}(jQuery));