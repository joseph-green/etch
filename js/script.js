$(document).ready(function(){
	var w = prompt('How wide?');
	var l = prompt('How tall?');
	var c = prompt('What colour?').toString();
	var o = prompt('What opacity?');
	$(document).on('click', '#change', function() {
		if (1 < $('input[name=length]').val() /10 < 100 && 1 < $('input[name=width]').val() /10 < 100) {

		c = $('input[name=colour]').val().toString();
		w = $('input[name=width]').val() ;
		l = $('input[name=length]').val() ;
		o = $('input[name=opacity]').val();

		console.log(w);
		console.log(l);
		generate();
		}
		else {
			$('#error').css('display', 'inline').fadeIn(300);
			w = 40;
			l = 40;
			generate();
		}
$('td.box').hover(function(){
	var x = 100 - o;
		$(this).css('background-color', c ).css('opacity',  x.toString())

	});
	

	});

	$(document).on('click', '#clear', function () {
		$('.box').css('background-color', c )
	});
	var generate = function () {
		$('#board').empty();
		for (i=1;i<l+1;i++) {
		$('#board').append('<tr class="row" ></tr>');
	    }
	    for (i=1;i<w+1;i++) {
	    	$('.row').append('<td class="box"></td>')
	    }
	    }
	/*$(document).on('click', '#bigger', function() {
		var he = $('.box').css('height') + 1;
		var wi = $('.box').css('width') + 1;
		$('.box').css('height',  he.toString());
		$('.box').css('width', wi.toString());


	});
	$(document).on('click', '#smaller', function() {
		var he = $('.box').css('height') - 1;
		var wi = $('.box').css('width') - 1;
		$('.box').css('height',  he.toString());
		$('.box').css('width', wi.toString());


	});
*/
	generate();
	$('td.box').hover(function(){
		var x = 100 - o;
		$(this).css('background-color', c ).css('opacity',  x.toString())
	});
	

    




});
