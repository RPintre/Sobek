var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    console.log('collision détectée !');
}

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