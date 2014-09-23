$(document).ready(function() {
	redline = Object.create(sol);
	
	joueur = Object.create(player);
	joueurTaille = joueur.Taille.eta();	
	
	redline.initDefault();
	
	redline.Position._posY=350;
	niveau0 = redline.Position._posY;
	joueur.init(niveau0-joueurTaille['h'],50);
	joueurPos = joueur.Position.eta();

	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on ajoute le sol au monde
	$(".world").append('<div id="sol" class="sol"></div>');
	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueurPos['y']).css('left',joueurPos['x']);
	$("#player").css('width',joueurTaille['w']).css('height',joueurTaille['h']);
	$("#sol").css('width',redline.Taille._width).css('height',redline.Taille._height);
	//joueur.collision(redline);
});