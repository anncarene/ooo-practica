$(document).ready(function(){
	let visible;
	const headerHeight = 70;

	function calculateVisibility(params) {
		if (params.width < 768) {
			visible = false;
			$("nav").css("top", headerHeight);
			$("nav").css("height", `calc(${params.height}px - ${headerHeight}px)`);
			$("nav").css("width", `${params.width}`);
			$("header svg").show();
		} else {
			visible = true;
			$("nav").css("top", "0px");
			$("nav").css("height", `${headerHeight}px`);
			$("nav").css("width", `600px`);
			$("header svg").hide();
		}

		if (visible) {
			$("nav").show();
		} else {
			$("nav").hide();
		}
	}

	let params = {
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight,
	};

	calculateVisibility(params);

	window.addEventListener("resize", () => {
		params.width = document.documentElement.clientWidth;
		params.height = document.documentElement.clientHeight;

		calculateVisibility(params);
	});

	$("svg").click(function() {
		if (!visible) {
			$("nav").show("slide", 500);
		} else {
			$("nav").hide("slide", 500);
		}

		visible = !visible;
	});

});