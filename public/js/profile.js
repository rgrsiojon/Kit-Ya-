$(function(){
	MenuFunction();
	// Loadding();
	SubmitForm();
	key();
	add_expre();

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

	function add_expre() {
		var fieds = $('.content .info #experience form fieldset.form-group');
		var vitri = 'r';

		if (fieds.length%2 === 0) {
			vitri = 'l'
		} 

		$('.content .info #experience form fieldset.form-group i.add-exper').click(function() {
			$('.content .info #experience form fieldset.form-group').last().after(`
				<fieldset class="form-group lg-${vitri}" id="fieldset-${fieds.length+1}">
							<input type="text" class="form-control exper" id="exper" placeholder="" value="Some Titel">
							<p style="text-align: center;color: #66bded;clear: both; padding-bottom: 7px;;">What do you do ?</p>							
							<i class="fas fa-save wranning"></i>
							<input type="text" class="form-control" id="" placeholder="Something... length < 37" maxlength="36">							
							<div class="block"><i class="fas fa-stop-circle"></i></div>
							<input type="date" class="date" id="date" placeholder="date">
							<i class="fas fa-plus-circle plus add-exper" ></i>
						</fieldset>
			`);

			$(this).prev().prev().children().removeClass('fa-stop-circle');
			$(this).prev().prev().children().addClass('fa-minus-circle');
			$(this).remove();

			for (var i = 1; i < fieds.length+2; i++) {
				fnExperience(i);
				$('#experience #fieldset-'+i+' .block i.fas.fa-minus-circle').click(function() {
					$(this).parent().parent().remove();
				});
			}

			add_expre();
		});
	}

	async function Parser() {
		var list_exp = new Array;
		const p_reg = new RegExp (/^[A-z0-9'\.\,\s\,]+$/i);

		var arr_submit = $('#experience fieldset.form-group');

		for (var i = 0; i < arr_submit.length; i++) {
			var tmp = new Array;

			var titel = $('#experience #fieldset-'+(i+1)+' #exper').val();
			var list_p = document.querySelectorAll('#experience #fieldset-'+(i+1)+' p')
			var date = $('#experience #fieldset-'+(i+1)+' #date').val();
			
			//@ check titel
			if (titel.trim().length === 0) {
				var err = "Enter for titel";
			    return Promise.reject(err);
			}

			if (titel.trim().length !== 0 && !(p_reg.test(titel.trim()))) {
				var err = "Enter for titel";
			    return Promise.reject(err);

			}

			// @check list
			for (var j = 1; j < list_p.length; j++) {
				if (list_p[j].textContent.trim().length !== 0 && !(p_reg.test(list_p[j]))) {
					var err = "Enter for titel";
				    return Promise.reject(err);
				}
				tmp.push(list_p[j].textContent)
			}

			list_exp[i] = {
				titel: titel,
				data: date,
				list: tmp
			}
		}

		return Promise.resolve(list_exp);
	}

	var fieds = $('.content .info #experience form fieldset.form-group');

	for (var i = 1; i < fieds.length+2; i++) {
		fnExperience(i);

		$('#experience #fieldset-'+i+' .block i.fas.fa-minus-circle').click(function() {
			$(this).parent().parent().remove();
			var check = document.querySelectorAll('.content .info #experience form fieldset.form-group');

			for (var j = 0; j < check.length; j++) {
				check[j].classList.remove('lg-r')
				check[j].classList.remove('lg-l')

				if (j%2==0) {
					check[j].classList.add('lg-l');
					check[j].id = 'fieldset-'+(j+1);
				} else {
					check[j].classList.add('lg-r');
					check[j].id = 'fieldset-'+(j+1);
				}
				
			}

			Parser().then((list_exp)=>{
				var base_url = location.protocol + "//" + document.domain + ":" + location.port ;
				$.ajax({
					url: base_url + '/home/profile/save',
					type: 'POST',
					dataType: 'json',
					data: {data:list_exp},
					success: function (res) {
						if (res && res.status_code == 200) {
							location.reload();
						}
					}
				})
			}).catch((err)=> {
				return false
			})

		});
	}


	function fnExperience(i) {

		const fn = new RegExp (/^[A-z0-9'\.\,\s\,]+$/i);

		$('#experience fieldset#fieldset-'+i+' input').focus(function() {
			$(this).prev().addClass('show');
		});

		$('#experience fieldset#fieldset-'+i+' input').prev().click(function() {
			if ($(this).next().val() === '') {
				return false
			} 

			if($(this).next().val().trim().length !== 0 && !(fn.test($(this).next().val().trim()))){
				return false
			}
				
			$('#experience fieldset#fieldset-'+i+' p').last().after('<p><i class="fas fa-times"></i>'+$(this).next().val()+'</p>');
			$(this).next().val('');
			$(this).removeClass('show');
			fnExperience(i);
			
			
		});

		$('#experience fieldset#fieldset-'+i+' p i').click(function() {
			$(this).parent().remove();
		});
	}

	function SubmitForm() {
		$('form#form-user').submit(function() {
			return false
		});
		$('#submit-exper').click(function() {
			Parser().then((list_exp)=>{
				var base_url = location.protocol + "//" + document.domain + ":" + location.port ;
				$.ajax({
					url: base_url + '/home/profile/save',
					type: 'POST',
					dataType: 'json',
					data: {data:list_exp},
					success: function (res) {
						if (res && res.status_code == 200) {
							location.reload();
						}
					}
				})
			}).catch((err)=> {
				return false
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
 			if (age < 17 || !age || age > 65) {
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
