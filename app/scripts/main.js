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
	$(this).css('color', 'red');
  alert("Everybody gets one...");
});

$('#yee').click(function(){
	$(this).animate({fontSize:"+=30px"});
  alert('This element is ' + $('#yee').width() + ' pixels wide.');
  alert('This element is ' + $('#yee').height() + ' pixels high.');
});

$('#input').dblclick(function(){
	alert('what r u even trying to do tho');
	$(this).slideUp('slow');
});

$('#favCopy').html($('#fav').text());

$('#grow').mouseenter(function(){
	$(this).animate({
			height:'+=50'
	})
});