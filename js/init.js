$(document).ready(function() {

	/* creation sol */
	redline = new construct_ground();
	redline.setPosition(0,400);
	redline.setSize(2000,2);
	
	niveau0 = redline.getPosition()._posY-redline.getSize()._height;

	/* creation du joueur */
	joueur = new construct_player();
	joueur.init();
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	c1 = new construct_square();
	c1.setPosition(500,niveau0-c1.getSize()._height);

	/*-------------------------------------------------*\
					Graphique
	\*-------------------------------------------------*/
	//on ajoute le sol au monde

	$(".world").append('<div id="sol" class="sol"></div>');
	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//
	$(".world").append('<div id="c1" class="carre"></div>');


	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	$("#sol").css('width',redline.getSize()._width).css('height',redline.getSize()._height);

	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueur.getPosition()._posY).css('left',joueur.getPosition()._posX);
	$("#player").css('width',joueur.getSize()._width).css('height',joueur.getSize()._height);

	//on place les obstacles
	$("#c1").css('top',c1.getPosition()._posY).css('left',c1.getPosition()._posX);
	$("#c1").css('width',c1.getSize()._width).css('height',c1.getSize()._height);
});
