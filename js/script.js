let menuButton 	= document.querySelector('.menu-button');
let mainMenu 	= document.querySelector('.main-menu');	

menuButton.addEventListener('click', function(e) {
	e.preventDefault;
	this.classList.toggle('menu-button_active');
	mainMenu.classList.toggle('main-menu_active');
});