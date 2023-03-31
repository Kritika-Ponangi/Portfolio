$(document).ready(function(){
	//console.log("test");
	//alert("LOADED");
	
		// var mobileMenu = $("#navigation").clone(true);
		// 
		// if (mobileMenu.length) {
		// 
		// 	new Mmenu( mobileMenu[0], {
		// 		  "extensions": [
		// 		  "pagedim-black",
		// 		  "position-right",
		// 		  "theme-dark",
		// 		  "fx-menu-slide",
		// 		  "shadow-page"
		// 	   ],
		// 	  
		// 	}
		// 	});	
		// }
		// $('#page').parallax({
		//   speed: -.2,
		//   sliderSelector: '>.parallax-slider',
		// });
		var rellax = new Rellax('.rellax', {});
		// $('.bottomContainer').parallax({
		//   speed: -.3,
		//   sliderSelector: '>.contacts',
		// });
		
});

$(document).ready(function() {

	/** ---------------------------- //
	 *  @group viewport trigger script 
	 * for adding or removing classes from elements in view within viewport
	*/
  
	var $animationElements = $('.animation-element');
	var $window = $(window);

	// ps: Let's FIRST disable triggering on small devices!
	var isMobile = window.matchMedia("only screen and (max-width: 768px)");
	if (isMobile.matches) {
		$animationElements.removeClass('animation-element');
	}

	function checkIfInView() {

		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBottomPosition = (windowTopPosition + windowHeight);

		$.each($animationElements, function () {
			var $element = $(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = $element.offset().top;
			var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
			
			if ((elementBottomPosition >= windowTopPosition) &&
				(elementTopPosition <= windowBottomPosition)) {
				
			
				$element.addClass('in-view');
				
				setTimeout(
				  function() 
				  {
					$element.addClass('triggered');
				  }, 5000);
				
				
				
			} 
		});
	}

	$window.on('scroll resize', checkIfInView);
	$window.trigger('scroll');
});
// 
// window.addEventListener("scroll", function() {
//   const distance = window.scrollY
//   document.querySelector("header").style.transform = `translateY(${distance *
// 	1}px)`
//   document.querySelector(
// 	".container"
//   ).style.transform = `translateY(${distance * 0.3}px)`
//   setTimeout(() => {
// 	document.querySelector("section h3").classList.add("animate-me")
//   }, 400)
// })
