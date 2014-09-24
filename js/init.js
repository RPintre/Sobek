+$(document).ready(function() {

	/* creation sol */
	redline = new construct_ground();
	redline.setPosition(0,300);
	redline.setSize(5000,2);

	/* creation limit */
	limit = new construct_ground();
	limit.setPosition(0,250);
	limit.setSize(5000,2);
	
	niveau0 = redline.getPosition()._posY-redline.getSize()._height;

	/* creation du joueur */
	joueur = new construct_player();
	joueur.init();	
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	joueur.setPosition(50,niveau0-joueur.Size._height);

	
	/* creation des obstacles */
	c1 = new construct_square();
	c1.setPosition(400,niveau0-c1.Size._height);


	//on ajoute le sol au monde
	$(".world").append('<div id="limit" class="limit"></div>');

	$(".world").append('<div id="sol" class="sol"></div>');
	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	// on ajoute les obstacle
		//carre
	$(".world").append('<div id="c1" class="carre"></div>');


	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	$("#sol").css('width',redline.getSize()._width).css('height',redline.getSize()._height);

	$("#limit").css('top',limit.getPosition()._posY);
	$("#limit").css('width',limit.getSize()._width).css('height',limit.getSize()._height);

	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueur.getPosition()._posY).css('left',joueur.getPosition()._posX);
	$("#player").css('width',joueur.getSize()._width).css('height',joueur.getSize()._height);
	
	// on place les obstacles (en css)
	$("#c1").css('top',c1.getPosition()._posY).css('left',c1.getPosition()._posX);
	$("#c1").css('width',c1.getSize()._width).css('height',c1.getSize()._height);

	//joueur.collision(redline);
});