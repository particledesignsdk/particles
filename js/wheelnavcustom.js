$(document).ready(function(){

	var colorpalette = {
		particles: new Array("#222222")
	};

	wheel = new wheelnav("wheelNav");
	wheel.wheelRadius = wheel.wheelRadius;
	wheel.cssMode = true;
	wheel.colors = colorpalette.particles;
	wheel.slicePathFunction = slicePath().DonutSlice;
	wheel.animatetime = 1000;
	wheel.animateeffect = "linear";
	wheel.createWheel(["Mission", "Vision", "Values"]);

	wheel.navItems[0].navigateFunction = function () {
		$("#mission-box").removeClass("hide");
		$("#mission-box").show(100);
		$("#vision-box").hide();
		$("#values-box").hide();
	};

	wheel.navItems[1].navigateFunction = function () {
		$("#vision-box").removeClass("hide");
		$("#vision-box").show(100);
		$("#mission-box").hide();
		$("#values-box").hide();
	};

	wheel.navItems[2].navigateFunction = function () {
		$("#values-box").removeClass("hide");
		$("#values-box").show(100);
		$("#vision-box").hide();
		$("#mission-box").hide();
	};


});