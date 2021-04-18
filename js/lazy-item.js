let all_lazy =	function (){
	let loads = document.getElementsByClassName("lazy-item");
	for(let i = 0; i < loads.length; i++){
		loads[i].setAttribute("src", loads[i].getAttribute("data-src"));
	}
};
let all_lazy_style =	function (){
	let loads_style = document.getElementsByClassName("lazy-item-style");
	for(let i = 0; i < loads_style.length; i++){
		loads_style[i].setAttribute("style", loads_style[i].getAttribute("data-style"));
	}
};     

window.addEventListener("scroll", all_lazy_style, {passive: true, once: true});
window.addEventListener("scroll", all_lazy, {passive: true, once: true});