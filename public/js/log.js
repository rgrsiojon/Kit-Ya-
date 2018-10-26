$(function(){

	createWrong();
	Animation_log();
	checkForm();

	function createWrong() {
		$('.input-wrong').hover(function() {
			$(this).next().toggleClass('create');
		});

		$('input').click(function() {
			$(this).next().removeClass('active');
		});
	}

	function Animation_log() {
		$('#animation_singin').click(function() {
			$('html, body').animate({scrollTop: 0}, 600);
			$('.singin').removeClass('active-log');
			$('.singin').removeClass('show');
			$('.singin').removeClass('hidden');

			$('.singnup').removeClass('show');
			$('.singnup').removeClass('hidden');

			$('.singin').addClass('hidden');
			$('.singnup').addClass('show');
			
		});

		$('#animation_singup').click(function() {
			$('html, body').animate({scrollTop: 0}, 600)
			$('.singin').removeClass('show');
			$('.singin').removeClass('hidden');

			$('.singnup').removeClass('show');
			$('.singnup').removeClass('hidden');

			$('.singnup').addClass('hidden');
			$('.singin').addClass('show');
		});

		
	}

	function checkForm() {
		$('.singnup .input-wrong').removeClass('ClickInput');
		$('#bntLogup').click(function() {
			$('form.main-form-up').submit(function() {

				const email_reg = new RegExp(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/);
				const pass_reg = new RegExp (/^(?=.*[A-z])(?=.*[0-9]).{8,16}$/);
				const name_reg = new RegExp (/^(?=.*[A-z])(?=.*[0-9]).{8,16}$/);
				var arrError = new Array();
				// @check name
	 			if ($('#name-up').val().trim().length === 0) {
	 				$('#name-up').next().addClass('active');
	 				arrError[0] = 'Enter name !';
	 			}

				var name = $('#name-up').val().trim().match(/([A-Za-z0-9_]{1,15})/img);

				if ($('#name-up').val().trim().length !== 0 && name[0]!== $('#name-up').val().trim()) {
					$('#name-up').next().addClass('active');
	 				arrError[0] = 'A-z, 0-9, length < 16';
				} 

	 			// @check username
	 			if ($('#username-up').val().trim().length === 0) {
	 				$('#username-up').next().addClass('active');
	 				arrError[1] = 'Enter username !';
	 			} 

	 			var username = $('#username-up').val().trim().match(/([A-Za-z0-9_]{1,15})/img);

				if ($('#username-up').val().trim().length !== 0 && username[0]!== $('#username-up').val().trim()) {
					$('#username-up').next().addClass('active');
	 				arrError[1] = 'A-z, 0-9, length < 16';
				} 

	 			// @check password
	 			if ($('#password-up').val().trim().length === 0) {
	 				$('#password-up').next().addClass('active');
	 				arrError[2] = 'Enter password !';
	 			} 
	 			// @check password for reg
	 			if ($('#password-up').val().trim().length !== 0 && !pass_reg.test($('#password-up').val().trim())) {
					$('#password-up').next().addClass('active');
			 		arrError[2] = 'A-z, 0-9, {8,16}';
				}
				// @check password for repeat
	 			if ($('#re-password-up').val().trim().length === 0) {
	 				$('#re-password-up').next().addClass('active');
	 				arrError[3] = 'Enter re-password !';
	 			}

	 			if ($('#re-password-up').val().trim().length !== 0 && $('#re-password-up').val() !== $('#password-up').val()) {
	 				$('#re-password-up').next().addClass('active');
	 				arrError[3] = 'Password is not match !';
	 			}
	 			// @check email
	 			if ($('#email-up').val().trim().length === 0) {
	 				$('#email-up').next().addClass('active');
	 				arrError[4] = 'Enter email !';
	 			}
	 			if($('#email-up').val().trim().length !== 0 && !email_reg.test($('#email-up').val().trim())){
					$('#email-up').next().addClass('active');
	 				arrError[4] = 'A-z0-9@A-z0-9.A-z !';
				}
	 			

	 			if (arrError.length !== 0) {
	 				$("html, body").animate({ scrollTop: 150 }, 400);
	 				if (arrError[0]) {
	 					$('#name-up').next().next().text(arrError[0]);
	 				}

	 				if (arrError[1]) {
	 					$('#username-up').next().next().text(arrError[1]);
	 				}

	 				if (arrError[2]) {
	 					$('#password-up').next().next().text(arrError[2]);
	 				}
	 				if (arrError[3]) {
	 					$('#re-password-up').next().next().text(arrError[3]);
	 				}
	 				if (arrError[4]) {
	 					$('#email-up').next().next().text(arrError[4]);
	 				}
	 				return false;
	 			} else {
	 				return true;
	 			}
			});
		});

		$('#bntLogin').click(function() {
			$('form.main-form-in').submit(function() {
				const pass_reg = new RegExp (/^(?=.*[A-z])(?=.*[0-9]).{8,16}$/);
				var arrError_in = new Array();
				// @check username
	 			if ($('#username-in').val().trim().length === 0) {
	 				$('#username-in').next().addClass('active');
	 				arrError_in[0] = 'Enter username !';
	 			} 

	 			var username_in = $('#username-in').val().trim().match(/([A-Za-z0-9_]{1,15})/img);

				if ($('#username-in').val().trim().length !== 0 && username_in[0]!== $('#username-in').val().trim()) {
					$('#username-in').next().addClass('active');
	 				arrError_in[0] = 'A-z, 0-9, length < 16';
				} 

				// @check password
	 			if ($('#password-in').val().trim().length === 0) {
	 				$('#password-in').next().addClass('active');
	 				arrError_in[1] = 'Enter password !';
	 			} 
	 			// @check password for reg
	 			if ($('#password-in').val().trim().length !== 0 && !pass_reg.test($('#password-in').val().trim())) {
					$('#password-in').next().addClass('active');
			 		arrError_in[1] = 'A-z, 0-9, {8,16}';
				}

				if (arrError_in.length !== 0) {
	 				if (arrError_in[0]) {
	 					$('#username-in').next().next().text(arrError_in[0]);
	 				}
	 				if (arrError_in[1]) {
	 					$('#password-in').next().next().text(arrError_in[1]);
	 				}
	 				return false;
	 			} else {
	 				return true;
	 			}
			});
		});
	}

})  
 