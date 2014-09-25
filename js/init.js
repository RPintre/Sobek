$(document).ready(function() {

	/* creation sol */
	redline = new construct_ground();
	redline.setPosition(0,300);
	redline.setSize(3000,2);
	
	niveau0 = redline.getPosition()._posY-redline.getSize()._height;

	/* creation du joueur */
	joueur = new construct_player();
	//joueur.init();
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	joueur.setPosition(50,0);

	c1 = new construct_square();
	c1.setPosition(0,0);

	function test(){
		console.log(joueur.getPosition());
		setTimeout(test,1);
	}
	test();

	/*-------------------------------------------------*\
					Graphique
	\*-------------------------------------------------*/
	//on ajoute le sol au monde

	$(".world").append('<div id="sol" class="sol"></div>');
	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');


	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	$("#sol").css('width',redline.getSize()._width).css('height',redline.getSize()._height);

	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueur.getPosition()._posY).css('left',joueur.getPosition()._posX);
	$("#player").css('width',joueur.getSize()._width).css('height',joueur.getSize()._height);
});
