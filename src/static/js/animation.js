(function ($) {
	"use strict";
	const imagesPath = "images/";
	let imageNames = ["jar", "spoon-half", "spoon", "bg", "bg-white", "new-text", "logo", "title"],
		images = [],
		imagesObj = {},
		$oui = $("<div class='oui'/>"),
		$imgTempl = $("<div class='oui__img'/>"),
		$close = $("<svg class='oui__close' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 612 612'><polygon points='612 36 576.5 0.6 306 270.6 35.5 0.6 0 36 270.5 306 0 576 35.5 611.4 306 341.4 576.5 611.4 612 576 341.5 306 ' fill='currentColor'/></svg>").appendTo($oui),
		$imgBox = $("<div class='oui__img-box'/>").appendTo($oui),
		$button = $("<a href='#' class='oui__button'>LEARN MORE</a>"),
		$rightTexts = $("<div class='oui__right-texts'/>").appendTo($oui),
		$tastesBox = $("<div class='oui__tastes-box'/>").appendTo($oui),
		$tasteItemsBox = $("<div class='oui__tastes-items-box'/>").appendTo($tastesBox),
		$tasteLabel = $("<div class='oui__tastes-label'>HOVER OVER A FLAVOR</div>").appendTo($tastesBox),
		$remark = $("<div class='oui__remark '/>").appendTo($tastesBox),
		tastesNames = ["vanilla", "blueberry", "coconut", "lemon", "peach", "plain", "strawberry", "black-cherry"],
		tastes = [],
		tasteObj = {},
		$tasteTempl = $("<a href='javascript: void(0);' class='oui__taste'/>"),
		$tasteImgTempl = $("<img class='oui__taste-img'/>"),
		speed = .6;

	$(imageNames).each(function () {
		let name = this,
			imgClass = "oui__img-" + name,
			$image = $imgTempl.clone().addClass(imgClass),
			image = $image.get(0);
		images.push(image);
		imagesObj[name] = image;
	});

	$(images).appendTo($imgBox);
	$([imagesObj["logo"], imagesObj["title"], $button.get(0)]).appendTo($rightTexts);
	$(imagesObj["new-text"]).appendTo($oui);


	$(tastesNames).each(function () {
		let name = this,
			tasteClass = "oui__taste-" + name,
			$taste = $tasteTempl .clone().addClass(tasteClass),
			taste = $taste.get(0),
			label = name.replace("-", " "),
			$label = $("<div class='oui__taste-label'>"+ label +"</div>").appendTo($taste),
			imgClass = "oui__taste-img-" + name,
			src = imagesPath + name + ".png",
			$image = $tasteImgTempl.clone().attr("src", src).addClass(imgClass).appendTo($taste);
		tastes.push(taste);
		tasteObj[name] = taste;
	});

	$(tastes).appendTo($tasteItemsBox);	

	function startAnimation () {
		var timeLine = new TimelineLite();
		$oui.appendTo($(document.body));
		timeLine.to($imgBox, (2 * speed), { opacity: 1 })
			.to(imagesObj["spoon-half"], 0, {display: "none"})
			.to(imagesObj["spoon"], (1 * speed), { top: "-25vmin", left: "14vmin", "z-index": 3})
			.to(imagesObj["spoon"], (1 * speed), { top: "1vmin", left: "33vmin", rotation: "32deg" })
			.to(imagesObj["spoon"], (1 * speed), { top: "12vmin", left: "2vmin", rotation: "55deg" })
			.to(imagesObj["spoon"], (1 * speed), { top: "13vmin", left: "-10vmin", rotation: "63deg"})
			.to(imagesObj["bg"], (1 * speed), { opacity: .8 });
		setTimeout(function () {
			TweenLite.to([imagesObj["spoon"], imagesObj["jar"]], (1 * speed), { opacity: 0, delay: (7 * speed) });
			TweenLite.to(imagesObj["bg"], (1 * speed), { left: "-152px", top: "-182px", opacity: 0, display: "none", delay: (7 * speed) });
			TweenLite.to(imagesObj["bg-white"], (1 * speed), { opacity: 1, delay: (7 * speed) });
		}, 0);
		setTimeout(function () {
			TweenLite.to($tastesBox, (5 * speed), { opacity: 1, delay: (8 * speed) } );
			TweenLite.to([imagesObj["new-text"], $rightTexts.get(0)], (5 * speed), { opacity: 1, delay: (8 * speed) });			
		}, 500);
		setTimeout(function () {
			TweenLite.to($remark.get(0), (2 * speed), { "right": 0, delay: (9 * speed) } );
		}, 600);
	}


	$(document).ready(function(){
		$oui.imagesLoaded().done( { background: true }, function () {
			startAnimation();			
		});		
	});

	$close.on("click.oui", function (){
		TweenLite.to($oui, 1, { opacity: 0, display: "none" });	
	});


}(jQuery));