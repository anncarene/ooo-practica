$(document).ready(function(){
	function showGallery(options) {
		for (let i = 0; i < options.docs; i++) {
			$("div.gallery").append(`
				<div class="col-sm-6 col-md-4 col-lg-3">
					<a href="#" class="thumbnail">
						<img src="drs/${options.path}/${i+1}.jpg" alt="">
						<div class="caption">
							<h3 style="text-align:center">${options.titles[i]}</h3>
						</div>
					</a>	
				</div>
			`);
		}
		
		if (options.path === "birin") {
			fixBirin();
		} else {
			fixChikin();
		}

		$("a.thumbnail").click(function(e){
			e.preventDefault();

			$("#image-modal .modal-body img").attr(
				"src",
				$(this).find("img").attr("src")
			);

			$("#image-modal").modal("show");
		});

		$("#image-modal .modal-body img").on("click", function() {
			$("#image-modal").modal("hide");
		});
	};

	function fixChikin() {
		$("div.gallery > div").css("height", "500px");
		$("div.gallery > div:nth-child(5), div.gallery > div:last-child").css("height", "900px");
	}

	function fixBirin() {
		$("div.gallery > div").css("height", "500px");
	}

	const drParams = {
		birin: {
			docs: 3,
			titles: [
				"Удостоверение",
				"Сертификат",
				"Сертификат"
			],
			name: "Бирин Дмитрий Викторович",
			path: "birin"
		},
		chikin: {
			docs: 6,
			titles: [
				"Диплом",
				"Сертификат",
				"Сертификат",
				"Удостоверение",
				"Свидетельство",
				"Свидетельство"
			],
			name: "Чикин Максим Андреевич",
			path: "chikin"
		},
		apex: {
			docs: 3,
			titles: [
				"Сертификат",
				"Удостоверение",
				"Диплом"
			],
			name: "Орешникова Татьяна Алексеевна",
			path: "apex"
		}
	};

	let options = drParams.birin;

	$('#chikin').append(drParams.chikin.name);
	$('#birin').append(drParams.birin.name);
	$("#apex").append(drParams.apex.name);

	$("#chikin").on('click', function(e){
		e.preventDefault();
		$("div.gallery").html("");

		options = drParams.chikin;

		showGallery(options);
	});

	$("#birin").on('click', function(e){
		e.preventDefault();
		$("div.gallery").html("");

		options = drParams.birin;

		showGallery(options);
	})

	$("#apex").on('click', function(e){
		e.preventDefault();
		$("div.gallery").html("");

		options = drParams.apex;

		showGallery(options);
	});
});