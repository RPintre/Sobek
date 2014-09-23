function movePlayer(){
	nouvellePos = joueur.Position.eta();
	var posYActuel = $("#player").css('top');
	console.log('posYActuel : '+posYActuel+', nouvellePos'+nouvellePos['x']);
	var duree = 1000;

	$("#player").velocity({ top: nouvellePos['x'],  rotateZ: [0,-90] },{duration:duree/2,
		complete:function(){
				joueur._allowJump=true;
			}
		 });
}

$(document).ready(function() {
	redline = Object.create(sol);
	
	

	redline = Object.create(sol);
	
	joueur = Object.create(player);
	joueurTaille = joueur.Taille.eta();	
	
	redline.initDefault();
	joueurTaille = joueur.Taille.eta();
	


	redline.initDefault();
	redline.Position._posX=350;
	niveau0 = redline.Position._posX;
	joueur.init(niveau0-joueurTaille['h'],50);
	joueurPos = joueur.Position.eta();


	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on ajoute le sol au monde
	$(".world").append('<div id="sol" class="sol"></div>');
	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueurPos['x']).css('left',joueurPos['y']);
	$("#player").css('width',joueurTaille['w']).css('height',joueurTaille['h']);
	//joueur.collision(redline);
});

	$(document).mousedown(function(){
		if(joueur._allowJump){
			joueur.jump();
			movePlayer();
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});