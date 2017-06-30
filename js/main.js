(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-first-left, #carousel-second-right'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel({
        interval: 5000
    });
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
//	Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
		$('#callBackForm').on('submit', function(e) {
		e.preventDefault();
		var $form = $(this);
		//переменная formValid

		jQuery.ajax({	// Начала конструкции для работы с Ajax через jQuery
			type: "POST", // Метод, которым получаем данные из формы
			url: "formdata.php", // Обработчик формы. 
			data: $form.serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
			success: function(html) {	// функция выполняемая при успешном отправлении данных
				//                 $("#myCallback").modal('hide');//закрываем окно
				$("#myrequery").modal('show');//Открываем окно блогодарности
					//setTimeout("('#myrequery').modal('hide')",2000);
					setTimeout(function() {
						$("#myrequery").modal('hide');
					}, 2500);
					$('input').val('');
			}
		});
	});
	
	
})(jQuery);
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});
$('.navbar-nav a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});