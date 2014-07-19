$('.album').hover(function(){
	$(this).addClass('faded');},
	function(){
		$(this).removeClass('faded');
	});

$('#input').keydown(function(){
	$('#yee').append('yee');
});

$('.album').click(function(){
	$(this).fadeOut('slow', function(){});
	alert('Bye!');
});

jQuery(document).ready(function() {
	jQuery('#spooky').hide();
});

$('#fav').one('click', function() {
  alert("Everybody gets one...");
});

$('#yee').click(function(){
  alert($('#yee').width());
}); 