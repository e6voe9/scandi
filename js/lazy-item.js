	var all_lazy =	function (){
				var loads = document.getElementsByClassName("lazy-item");
				for(var i = 0; i < loads.length; i++){
					loads[i].setAttribute("src", loads[i].getAttribute("data-src"));
				}
				window.removeEventListener("scroll",all_lazy);
			};
	var all_lazy_style =	function (){
				var loads_style = document.getElementsByClassName("lazy-item-style");
				for(var i = 0; i < loads_style.length; i++){
					loads_style[i].setAttribute("style", loads_style[i].getAttribute("data-style"));
				}
					window.removeEventListener("scroll",all_lazy_style);
			};     

window.addEventListener("scroll", all_lazy_style, {passive: true});
window.addEventListener("scroll", all_lazy, {passive: true});