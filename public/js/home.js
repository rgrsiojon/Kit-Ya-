$(function(){
	MenuFunction();
	Loadding();

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


	function Loadding() {
		var t1 = new TimelineMax();

		var inputForm = $('.loading .content .list-load  li');

		t1.staggerFromTo(inputForm,1, {x:100, opacity:0, visibility: "hidden"},{x:0, opacity:1,visibility: "visible"}, 0.15)
		.staggerTo(inputForm,1, {x:-100, opacity:0}, 0.15).add(showHome)
	}

	// showHome();

	function showHome() {
		$('.home').addClass('home-show');
		$('.loading').addClass('loading-hidden');
		$('#content img').addClass('show-img');
		$('#wel h4.text-xs-center').addClass('show-h4');
		$('#wel button').addClass('show-button');
		$('#wel p.p-black').addClass('show-p');
		$('#footer p').addClass('show_p');
		$('i#bars.bars-black').addClass('show-bars');
		$('.home .menu .user a#user').addClass('show-user');
	}

})  
 