document.querySelectorAll('.o_color_palette .swatch').forEach(function(swatch) {
	swatch.addEventListener('click', function() {
		var hex = swatch.dataset.hex;
		navigator.clipboard.writeText(hex).then(function() {
			swatch.classList.add('copied');
			setTimeout(function() {
				swatch.classList.remove('copied');
			}, 1500);
		});
	});
});
