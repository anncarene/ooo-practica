$(document).ready(function(){
	async function showGallery(options) {
		for (let i = 0; i < options.docs; i++) {
			await $(`div#${options.id}`).append(`
				<div class="col-sm-6 col-md-4 col-lg-3">
					<a href="#" class="thumbnail">
						<img src="docs/${options.path}/${i+1}.jpg" alt="">
					</a>	
				</div>
			`);
			
			if (options.titles) {
				$(`#${options.id} div:nth-of-type(${i+1}) a.thumbnail`).append(`
					<div class="caption">
						<h3 style="text-align:center">${options.titles[i]}</h3>
					</div>
				`);
			}
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

	const docsParams = {
		contract: {
			id: "contract",
			docs: 3,
			titles: null,
			path: "contract"
		},
		others: {
			id: "others",
			docs: 4,
			titles: [
				"Свидетельство",
				"Лицензия",
				"Приложение",
				"Свидетельство"
			],
			path: "others"
		},
		price_therapic: {
			id: "price_therapic",
			docs: 3,
			titles: null,
			path: "price_therapic"
		},
		price_orthopedic: {
			id: "price_orthopedic",
			docs: 7,
			titles: null,
			path: "price_orthopedic"
		}
	};

	for (let doc in docsParams) {
		showGallery(docsParams[doc]);		
	}
});