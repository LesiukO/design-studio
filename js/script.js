let menuButton 	= document.querySelector('.menu-button');
let mainMenu 	= document.querySelector('.main-menu');	
let buttonDown  = document.querySelector('.button-down');
let navLinks  = document.querySelectorAll('.nav__link');

menuButton.addEventListener('click', function(e) {
	e.preventDefault;
	this.classList.toggle('menu-button_active');
	mainMenu.classList.toggle('main-menu_active');
});

for (let navLink of navLinks) {
	navLink.addEventListener('click', function(e) {
		e.preventDefault();
		let sectionId 	= this.getAttribute('href')
		document.querySelector('' + sectionId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});
}

buttonDown.addEventListener('click', function(e) {
		e.preventDefault();
		let sectionId 	= this.getAttribute('href')
		document.querySelector('' + sectionId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});