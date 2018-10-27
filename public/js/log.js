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
			$('.singnup').removeClass('active-log');

			$('.singin').addClass('hidden');
			$('.singnup').addClass('show');
			
		});

		$('#animation_singup').click(function() {
			$('html, body').animate({scrollTop: 0}, 600)
			$('.singin').removeClass('active-log');
			$('.singin').removeClass('show');
			$('.singin').removeClass('hidden');

			$('.singnup').removeClass('show');
			$('.singnup').removeClass('hidden');
			$('.singnup').removeClass('active-log');

			$('.singnup').addClass('hidden');
			$('.singin').addClass('show');
		});

		
	}

	function checkForm() {
		$('.singnup .input-wrong').removeClass('ClickInput');
		$('#bntLogup').click(function() {
			$('form.main-form-up').submit(function() {

				const email_reg = new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/);
				const pass_reg = new RegExp (/^[A-z0-9_-]{8,18}$/);
				const name_reg = new RegExp (/^[A-z ,.'-]+$/i);
				const user_reg = new RegExp (/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);

				var arrError = new Array();
				// @check name
	 			if ($('#name-up').val().trim().length === 0) {
	 				$('#name-up').next().addClass('active');
	 				arrError[0] = 'Enter name !';
	 			}

				if ($('#name-up').val().trim().length !== 0 &&  !name_reg.test($('#name-up').val().trim())) {
					$('#name-up').next().addClass('active');
	 				arrError[0] = 'A-z, 3 < length < 16';
				} 
	 			// @check username
	 			if ($('#username-up').val().trim().length === 0) {
	 				$('#username-up').next().addClass('active');
	 				arrError[1] = 'Enter username !';
	 			} 

				if ($('#username-up').val().trim().length !== 0 &&  !user_reg.test($('#username-up').val().trim())) {
					$('#username-up').next().addClass('active');
	 				arrError[1] = 'A-z, 8 < length < 20';
				} 

	 			// @check password
	 			if ($('#password-up').val().trim().length === 0) {
	 				$('#password-up').next().addClass('active');
	 				arrError[2] = 'Enter password !';
	 			} 
	 			// @check password for reg
	 			if ($('#password-up').val().trim().length !== 0 && !pass_reg.test($('#password-up').val().trim())) {
					$('#password-up').next().addClass('active');
			 		arrError[2] = 'A-z, 0-9, {8,18}';
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
	 				arrError[4] = 'A-z0-9_-@A-z0-9.A-z !';
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
				const pass_reg_in = new RegExp (/^[A-z0-9_-]{8,18}$/);
				const user_reg_in = new RegExp (/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
				var arrError_in = new Array();
				// @check username
	 			if ($('#username-in').val().trim().length === 0) {
	 				$('#username-in').next().addClass('active');
	 				arrError_in[0] = 'Enter username !';
	 			} 

				if ($('#username-in').val().trim().length !== 0 &&  !user_reg_in.test($('#username-in').val().trim())) {
					$('#username-in').next().addClass('active');
	 				arrError_in[0] = 'A-z, 8 < length < 20';
				} 

				// @check password
	 			if ($('#password-in').val().trim().length === 0) {
	 				$('#password-in').next().addClass('active');
	 				arrError_in[1] = 'Enter password !';
	 			} 

	 			if ($('#password-in').val().trim().length !== 0 && !pass_reg_in.test($('#password-in').val().trim())) {
					$('#password-in').next().addClass('active');
			 		arrError_in[1] = 'A-z, 0-9, {8,18}';
				}

				if (arrError_in[0] || arrError_in[1]) {
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
 