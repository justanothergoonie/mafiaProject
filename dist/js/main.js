'use strict';

console.log(
	"Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."
);
gsap.registerPlugin(ScrollTrigger);
var sections = gsap.utils.toArray('.panel');
var NUM_PANELS = 5;
var PANEL_RATIO = 16 / 9;
var experienceWrapper = document.querySelector('.experience-wrapper');
var experience = experienceWrapper.querySelector('.experience');
var experiencePadder = experienceWrapper.querySelector('.experience-padder');
var panels = experienceWrapper.querySelectorAll('.panel');
var timeline = gsap.timeline({
	duration: 100,
	paused: true,
}); // set up a 100s timeline

var tlShine = new gsap.timeline({
	repeat: -1,
	repeatDelay: 3,
});

var resizeStuff = function resizeStuff() {
	var onePanelHeight = panels[0].offsetHeight; // just ask the first panel how tall it is, to find what CSS has currently calculated its height to be

	var onePanelWidth = onePanelHeight * PANEL_RATIO; // figure out what its width should be to maintain the chosen ratio

	experience.style.width = onePanelWidth * NUM_PANELS + 'px'; // set the whole sideways scrolling thing to NUM_PANELS times the width of one panel

	panels.forEach(function (panel) {
		panel.style.width = onePanelWidth + 'px'; // set the panels to that single panel width too
	});
	experiencePadder.style.height = onePanelWidth * NUM_PANELS + 'px'; // set the hidden padding element to be tall enough that we can scroll down through NUM_PANELS worth of panels
};

window.addEventListener('resize', resizeStuff);
window.addEventListener('orientationchange', resizeStuff);
resizeStuff();
window.addEventListener('scroll', function () {
	var topLimit = experienceWrapper.getBoundingClientRect().top;
	console.log(topLimit);

	if (topLimit < 0) {
		// experience.style.top = -topLimit + 'px'; // keeps the panels in place
		experience.style.left = topLimit + 'px'; // keeps the panels in place
	} else {
		// experience.style.top = 0 + 'px';
	}

	var percent =
		-topLimit / (experiencePadder.offsetHeight - panels[0].offsetHeight);
	timeline.progress(percent);
}); // gsap animations
// put a tween on the timeline

timeline.to(
	['.table', '.man'],
	{
		duration: 17,
		// takes 2 seconds
		x: '-10%',
	},
	0
); // starts at the 1 second mark
//gun
tlShine.to(['#shine1', '#shine2'], {
	duration: 0.8,
	x: '100vw',
	ease: 'power1.in',
});
tlShine.set(['#shine1', '#shine2'], {
	x: '-100vw',
});
tlShine.to(['#shine1', '#shine2'], {
	duration: 0.5,
	x: '0vw',
	ease: 'power1.out',
});
//boat
tlShine.to(['#shine3', '#shine4'], {
	duration: 0.8,
	x: '100vw',
	ease: 'power1.in',
});
tlShine.set(['#shine3', '#shine4'], {
	x: '-100vw',
});
tlShine.to(['#shine3', '#shine4'], {
	duration: 0.5,
	x: '0vw',
	ease: 'power1.out',
});
//lic-plate
tlShine.to(['#shine5', '#shine6'], {
	duration: 0.8,
	x: '100vw',
	ease: 'power1.in',
});
tlShine.set(['#shine5', '#shine6'], {
	x: '-100vw',
});
tlShine.to(['#shine5', '#shine6'], {
	duration: 0.5,
	x: '0vw',
	ease: 'power1.out',
});
// gsap.to('#shine2', { duration: 1, x: -150 });
//# sourceMappingURL=main.js.map
