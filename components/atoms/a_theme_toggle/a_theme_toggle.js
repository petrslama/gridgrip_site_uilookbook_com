document.addEventListener('DOMContentLoaded', () => {
	var theme = localStorage.theme || 'palette';
	setTheme(theme);

	document.querySelectorAll('.a_theme_toggle').forEach((btn) => {
		btn.addEventListener('click', () => {
			setTheme(btn.dataset.theme);
		});
	});

	function setTheme(t) {
		document.documentElement.classList.remove('light', 'dark', 'palette');
		if (t === 'light' || t === 'dark' || t === 'palette') {
			document.documentElement.classList.add(t);
			localStorage.theme = t;
		} else {
			localStorage.removeItem('theme');
			t = 'auto';
		}
		document.querySelectorAll('.a_theme_toggle').forEach((btn) => {
			btn.classList.toggle('active', btn.dataset.theme === t);
		});
	}
});
