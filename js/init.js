$(document).ready(function() {
	redline = new construct_ground();
	
	joueur = new construct_player();
	joueurTaille = joueur.getSize();	
	joueur.init();
	redline.setPosition(0,300);
	redline.setSize(5000,2);
	
	niveau0 = redline.getPosition();
	niveau0 = niveau0['_posY'];

	joueur.setPosition(50,niveau0-joueurTaille['_height']);
	joueurPos = joueur.getPosition();

	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on ajoute le sol au monde
	$(".world").append('<div id="sol" class="sol"></div>');
	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueurPos._posY).css('left',joueurPos._posX);
	$("#player").css('width',joueurTaille._width).css('height',joueurTaille._height);
	$("#sol").css('width',redline.Size._width).css('height',redline.Size._height);
	//joueur.collision(redline);
});