function movePlayer(){
	nouvellePos = joueur.Position.eta();
	var posYActuel = $("#player").css('top');
	console.log('posYActuel : '+posYActuel);
	var duree = 1000;

	$("#player").velocity({ top: [posYActuel,nouvellePos['x']],  rotateZ: [0,-90] },{duration:duree/2,
		complete:function(){
			$("#player").velocity({top:[nouvellePos['x'],posYActuel], rotateZ: [0,-90]},{duration:duree/2,
			complete:function(){
				joueur._allowJump=true;
			}
		 });
		}
	});
}

$(document).ready(function() {
	niveau0 = $(".sol").css("top");
	niveau0 = parseInt(niveau0,10) - 2;

	joueur = Object.create(player);

	joueurTaille = joueur.Taille.eta();
	joueur.init(niveau0-joueurTaille['h'],50);

	joueurPos = joueur.Position.eta();

	redline = Object.create(sol);
	redline.initDefault;

	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueurPos['x']).css('left',joueurPos['y']);
	$("#player").css('width',joueurTaille['w']).css('height',joueurTaille['h']);
});

	$(document).mousedown(function(){
		if(joueur._allowJump){
			joueur.jump();
			movePlayer();
			console.log(joueur.Position.eta());
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});