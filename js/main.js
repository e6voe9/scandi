window.addEventListener("scroll",function(){
	let header = document.querySelector('.header');
	header.classList.toggle("header--sticky", window.scrollY > 0);
}, {passive: true})

let inputs = document.querySelectorAll('.form__input');
for (let i = 0; i < inputs.length; ++i){
	inputs[i].addEventListener('keyup',function(e){
		if (e.target.value !== ''){
			inputs[i].classList.add('form__input--focus');
		} else {
			inputs[i].classList.remove('form__input--focus');
		}
		
	} ,{passive: true})
}
let burger = document.querySelector('.burger'),
	burgerBtns = document.querySelectorAll('.menu__list--mob .menu__item'),
	menuMob = document.querySelector('.menu__list--mob'),
	logo = document.querySelector('.logo');
function changeBurger(){
	menuMob.classList.toggle('menu__list--open');
	burger.classList.toggle('burger--active');
}
for (let i = 0; i < burgerBtns.length; ++i){
	burgerBtns[i].addEventListener('click', function(){
		changeBurger();
	},{passive: true});
}

burger.addEventListener('click', function(){
	changeBurger();
},{passive: true});

logo.addEventListener('click', function(){
	if (menuMob.classList.contains('menu__list--open')){
		menuMob.classList.remove('menu__list--open');
	}
},{passive: true})

let all_lazy =	function (){
	let loads = document.getElementsByClassName("lazy-item");
	for(let i = 0; i < loads.length; ++i){
		loads[i].setAttribute("src", loads[i].getAttribute("data-src"));
	}
};
window.addEventListener("scroll", all_lazy, {passive: true, once: true});