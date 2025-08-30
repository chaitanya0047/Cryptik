    const loader = document.querySelector('.Loader');
	const content = document.querySelector('.mainContainer');

	// Show loader initially
	loader.style.display = 'flex';
	content.style.display = 'none';

	// After 3 seconds, hide loader and show content
	setTimeout(() => {
		loader.style.display = 'none';
		content.style.display = 'flex';
	}, 3000);
