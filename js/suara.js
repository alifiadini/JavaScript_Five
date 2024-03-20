$(document).ready(function(){
	//---------------menampilkan gambar------------------
	$("div.hantu").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/kucing.jpg")',
		});
	});
	$("div.merak").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/burung merak.jpg")',
		});
	});
	$("div.pipit").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/dogg.jpg")',
		});
	});


	//---------------menampilkan suara------------------
	$("div.hantu").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-kucing.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.merak").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-burung-merak.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	$("div.pipit").click(function(){
		$("<audio></audio>").attr({
		   'src' : 'audio/suara-dog.mp3',
		   'volume' : '0.5',
		   'autoplay' : 'autoplay',
		}).appendTo("div");
	});
	
});
