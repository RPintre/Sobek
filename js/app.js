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
	niveau0 = $(".sol").css("top");
	niveau0 = parseInt(niveau0,10) - 2;

	redline = Object.create(sol);
	
	joueur = Object.create(player);
	joueurTaille = joueur.Taille.eta();	
	
	redline.initDefault();

	joueur.init(350,50);

	joueurPos = joueur.Position.eta();

	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueurPos['x']).css('left',joueurPos['y']);
	$("#player").css('width',joueurTaille['w']).css('height',joueurTaille['h']);

	joueur.collision(redline);
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