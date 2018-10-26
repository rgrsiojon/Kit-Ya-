$(function(){
	MenuFunction();

	function MenuFunction() {
		$('#toggle-menubar').click(function() {
			$('#menu-bar').removeClass('menu-bar-show');
			$('#toggle-menubar').removeClass('toggle-menubar-show')
		});
		$('#bars').click(function() {
			$('#menu-bar').addClass('menu-bar-show');
			$('#toggle-menubar').addClass('toggle-menubar-show')
		});

		$('#user').click(function() {
			console.log('ok');
			$('#menu-user').toggleClass('menu-user-show');
			$('#menu-user-rul').toggleClass('menu-user-show');
		});

		$('.home #eye').click(function() {
			$('.home').toggleClass('home-black');
			$(this).toggleClass('eye-black');
			$('#wel h4.text-xs-center').toggleClass('h4-black');
			$('i#bars').toggleClass('bars-black');
			$('#wel p').toggleClass('p-black');
		});
	}

})  
 