window.onload = function () {
	let menuButton 	= document.querySelector('.menu-button');
	let mainMenu 	= document.querySelector('.main-menu');	
	let buttonDown  = document.querySelector('.button-down');
	let navLinks  = document.querySelectorAll('.nav__link');
	let header  = document.querySelector('.header');
	let infoButton = document.querySelector('.main-info__button');
	let buttonToTop = document.querySelector('.to-top');

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

	buttonToTop.addEventListener('click', function(e) {
		e.preventDefault();
		let sectionId 	= this.getAttribute('href')
		document.querySelector('' + sectionId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});

	infoButton.addEventListener('click', function(e) {
			e.preventDefault();
			let sectionId 	= this.getAttribute('href')
			document.querySelector('' + sectionId).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		});

	window.addEventListener('scroll', function(e) {
		e.preventDefault();

		if (window.scrollY >= 150) {
			header.classList.add("header_colored");
			header.classList.remove("header_transparent");

			buttonToTop.classList.add("to-top_active");
			buttonToTop.classList.remove("to-top_disabled");
		} else {
			header.classList.add("header_transparent");
			header.classList.remove("header_colored");

			buttonToTop.classList.add("to-top_disabled");
			buttonToTop.classList.remove("to-top_active");
		}
	})
}