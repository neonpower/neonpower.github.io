var openMenu = document.querySelector('.menu-responsive');
var closeMenu = document.querySelector('.close-menu-responsive');
var mainMenu = document.querySelector('.main-navigation');
var searchBtn = document.querySelector('.search');
var searchBlock = document.querySelector('.search-block');

console.log(closeMenu);

openMenu.addEventListener('click', function () {
	mainMenu.classList.add('active');
	closeMenu.style.display = 'block';
	document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', function() {
	mainMenu.classList.remove('active');
	closeMenu.style.display = 'none';
	document.body.classList.remove('no-scroll');
})

searchBtn.addEventListener('click', function() {
	searchBlock.classList.toggle('active');
})