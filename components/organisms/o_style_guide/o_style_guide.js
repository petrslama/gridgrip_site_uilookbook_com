document.querySelectorAll('.o_style_guide .principle img[alt]').forEach(function(img) {
	var principle = img.closest('.principle');
	var cover = img.closest('.a_image_cover');
	cover.setAttribute('data-prompt', img.alt);
	cover.addEventListener('click', function() {
		navigator.clipboard.writeText(img.alt).then(function() {
			principle.classList.add('copied');
			setTimeout(function() {
				principle.classList.remove('copied');
			}, 1500);
		});
	});
});
