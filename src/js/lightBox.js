let lightboxLinks = document.querySelectorAll('.lightboxify');

let letThereBeLightBox = function (event) {
	event.preventDefault();

	let backDrop = document.createElement('div');
	backDrop.classList.add('lightbox-backdrop');
	backDrop.style.opacity = 0;
	setTimeout(function () {
		backDrop.style.opacity = 1;
		backDrop.style.transition = '1s';
	}, 10);
	document.body.appendChild(backDrop);

	let whiteLight = document.createElement('div');
	whiteLight.classList.add('lightbox');
	whiteLight.style.opacity = 0;
	setTimeout(function () {
		whiteLight.style.opacity = 1;
		whiteLight.style.transition = '2s';
	}, 10);
	document.body.appendChild(whiteLight);

	let largeImage = document.createElement('img');
	largeImage.setAttribute('src', this.href);

	whiteLight.appendChild(largeImage);

	let closeBtn = document.createElement('div');
	closeBtn.classList.add('lightbox-close');
	whiteLight.appendChild(closeBtn);

	let beGoneLightBox = function () {
		whiteLight.remove();
		backDrop.remove();
	};

	closeBtn.addEventListener('click', beGoneLightBox);

	whiteLight.addEventListener('click', beGoneLightBox);

	backDrop.addEventListener('click', beGoneLightBox);

	window.addEventListener('keyup', function (event) {
		if (event.code === 'Escape') {
			beGoneLightBox();
		}
	});
};

for (var i = 0; i < lightboxLinks.length; i++) {
	//creates a for loop to run through all of lightBoxLinks to apply the letThereBeLightBox function to all of them
	lightboxLinks[i].addEventListener('click', letThereBeLightBox); //when clicked
}
