document.querySelectorAll('.o_typography .card').forEach(function(card) {
	card.addEventListener('click', function() {
		var css = card.dataset.css;
		if (!css) return;
		navigator.clipboard.writeText(css).then(function() {
			card.classList.add('copied');
			setTimeout(function() {
				card.classList.remove('copied');
			}, 1500);
		});
	});
});
