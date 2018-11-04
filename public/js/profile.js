$(function(){
	MenuFunction();
	// Loadding();

	SubmitForm();


	function add_expre(i) {
		var vitri = '';
		if (i%2==0) {
			vitri = 'l';
		} else {
			vitri = 'r';
		}

		$('.content .info #experience form fieldset.form-group i.add-exper').click(function() {
			$('.content .info #experience form fieldset.form-group').last().after(`
				<fieldset class="form-group lg-${vitri}" id="fieldset-${i+1}">
					<!-- this is input -->
					<input type="text" class="form-control exper" id="exper-${i+1}" placeholder="Some titel" name="titel_${i+1}" value="">
					<!-- end for input -->
					<p style="text-align: center;color: #66bded;clear: both; padding-bottom: 7px;;">What do you do ?</p>
					<input type="hidden" class="form-control" id="id-${i+1}" value="${i+1}">
					<i class="fas fa-save wranning" id="i-somethingtext-${i+1}"></i>
					<!-- this is input -->
					<input type="text" name="somethingtext_${i+1}" class="form-control" id="somethingtext-${i+1}" placeholder="Something... length < 37" maxlength="36">
					<div class="block"></div>
					<input type="date" class="date" id="date-${i+1}" name="date_1" placeholder="date">

					<!-- end for input -->
					<i class="fas fa-plus-circle plus add-exper" ></i>

				</fieldset>
			`)
			$(this).remove();
		});

	}

	var arr = $('#experience fieldset.form-group input.exper')
	add_expre(arr.length);
	for (var i = 1; i < arr.length +1; i++) {
		fnExperience('#somethingtext-'+i, '#i-somethingtext-'+i, '#fieldset-'+i, i);
	}


	key();
	function key(){
		$('form').keypress(function(event) {
			if (event.keyCode === 13) {
				return false
			}
		});

	}

	function MenuFunction() {
		$('#bars').click(function() {
			$(this).toggleClass('changecolor-bar');
			$('#menu-bar').toggleClass('menu-bar-show');
		});
	}


	function fnExperience(somethingtext, i_somethingtext, fieldset, i) {
		var giatri = '';
		var trangthai = 'co gia tri';
		var dem = 1;
		setInterval(()=>{
			if($(somethingtext).val() != '') {
				if (trangthai == 'co gia tri') {
					$(somethingtext).prev().addClass('show');
					trangthai = 'add xong roi'
				}
				if ($(somethingtext).val() != giatri) {
					giatri = $(somethingtext).val();
					if ($(somethingtext).val().length > 35) {
						$(somethingtext).prev().removeClass('fa-save');
						$(somethingtext).prev().addClass('fa-exclamation-triangle');
					}
					if ($(somethingtext).val().length <= 35) {
						$(somethingtext).prev().removeClass('fa-exclamation-triangle');
						$(somethingtext).prev().addClass('fa-save');
					}

				}
			}

			if($(somethingtext).val() == '') {
				if (trangthai == 'add xong roi') {
					$(somethingtext).prev().removeClass('show');
					trangthai = 'co gia tri';
				}

			}

			// DeteleExper(fieldset, i);

			$('#experience fieldset.form-group p i.fas.fa-times').click(function() {
				$(this).parent().remove();
			});


		},50);

		$(i_somethingtext).click(function() {
			$('#experience '+fieldset+' p').last().after('<p style="clear: both;" class="_'+i+dem+'" data-key-'+i+dem+'="'+i+dem+'"><i class="fas fa-times _'+i+dem+'" data-key-i-'+i+dem+'="'+i+dem+'"></i> '+$(this).next().val()+' </p>');
			$(this).next().val('');
			dem++;

		});
	}

	function SubmitForm() {
		const reg =  new RegExp(/^[A-z0-9'\.\,\s\,]+$/i);
		$('form#form-user').submit(function() {
			return false
		});

		var arr_experence_p = []
		var arr_submit = $('#experience fieldset.form-group input.exper')


		var tmp = {}
		$('#experience fieldset.form-group i.wranning').click(function() {
			var id = $(this).prev().val().trim();
			var something = $('#experience fieldset.form-group input#somethingtext-'+id).val().trim();
	
			if (id === 0) {
			    return false
			}


			if (id !== 0 && !(reg.test(arr[i]))) {
			    return false
			}

			if (something === 0) {
			    return false
			}

			if (something !== 0 && !(reg.test(arr[i]))) {
			    return false
			}

			tmp = {
				id:id,
				text:something
			}
			
			arr_experence_p.push(tmp)
		});

		$('#submit-exper').click(function() {
			
			var arr = new Array();
			

			

			var arr_experence = new Array();

			for (var i = 1; i < arr_submit.length +1; i++) {
				id = $('#experience fieldset.form-group input#id-'+i).val(),
				titel = $('#experience fieldset.form-group input#exper-'+i).val(),
				date = $('#experience fieldset.form-group input#date-'+i).val()

				if (id === 0) {
				    return false
				}

				if (id !== 0 && !(reg.test(arr[i]))) {
				    return false
				}

				if (titel === 0) {
				    return false
				}

				if (titel !== 0 && !(reg.test(arr[i]))) {
				    return false
				}

				if (date === 0) {
				    return false
				}

				arr_experence[i] = {
					id: id,
					titel: titel,
					date: date
				}
			}

			var base_url = location.protocol + "//" + document.domain + ":" + location.port ;
			$.ajax({
				url: base_url + '/home/profile/save',
				type: 'POST',
				dataType: 'json',
				data: {
					titel_exp: arr_experence,
					list_exp: arr_experence_p
				},
				success: function (res) {
					if (res && res.status_code == 200) {
						location.reload();
					}
				}
			})

		});


		$('#submit-user').click(function() {

			const fullName_reg =  new RegExp (/^[A-z ,.'-]+$/i);
			const email_reg = new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/);
			const address_reg = new RegExp (/^[A-z0-9'\.\,\s\,]+$/i);

			var arrError = new Array();

			// @check name
 			if ($('#name_full').val().trim().length == 0 ) {
 				$('#name_full').next().addClass('active');
 				arrError[0]='err';
 			}

			if ($('#name_full').val().trim().length !== 0 &&  !fullName_reg.test($('#name_full').val().trim())) {
				$('#name_full').next().addClass('active');
				arrError[0]='err';
			}
			// @check age
			if ($('#age').val().trim().length === 0 ) {
 				$('#age').next().addClass('active');
 				arrError[0]='err';
 			}

 			var age = parseInt($('#age').val().trim())
 			if (!age && $('#age').val().trim().length !== 0) {
 			    $('#age').next().addClass('active');
 				arrError[0]='err';
 			}

			// @check email

			if ($('#email').val().trim().length === 0 ) {
 				$('#email').next().addClass('active');
 				arrError[0]='err';
 			}
			if ($('#email').val().trim().length !== 2 &&  !email_reg.test($('#email').val().trim())) {
				$('#email').next().addClass('active');
 				arrError[0]='err';
			}

			// @check tel
			// if ($('#tel').val().trim().length === 0 ) {
 		// 		$('#tel').next().addClass('active');
 		// 		arrError[0]='err';
 		// 	}

 			if (!(9<= $('#tel').val().trim().length <=11) && $('#tel').val().trim().length !== 0) {
 				$('#tel').next().addClass('active');
 				arrError[0]='err';
 			}

 			var tel = $('#tel').val().trim();

 			if (!tel) {
 			    $('#tel').next().addClass('active');
 				arrError[0]='err';
 			}

			// @check address
 			if ($('#address').val().trim().length == 0 ) {
 				$('#address').next().addClass('active');
 				arrError[0]='err';
 			}

			if ($('#address').val().trim().length !== 0 &&  !address_reg.test($('#address').val().trim())) {
				$('#address').next().addClass('active');
 				arrError[0]='err';
			}
			// @check address

			if (arrError[0]) {
			    return false
			} else {
			    var base_url = location.protocol + "//" + document.domain + ":" + location.port ;
			    var data =  {
			    	name: $('#name_full').val().trim(),
			    	age: $('#age').val().trim(),
			    	email: $('#email').val().trim(),
			    	tel: $('#tel').val().trim(),
			    	address: $('#address').val().trim()
			    }
				$.ajax({
					url: base_url + '/home/profile',
					type: 'POST',
					dataType: 'json',
					data: {data: data}
				})
			}
		});

		$('#fullname form input').click(function() {
			$(this).next().removeClass('active')
		});

	}
})
