$('.album').hover(function(){
	$(this).addClass('faded');},
	function(){
		$(this).removeClass('faded');
	});

$('#input').keydown(function(){
	$('#yee').append('yee');
});