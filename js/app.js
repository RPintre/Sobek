

function initPlayer(){
	joueur = Object.create(player);
	joueur._vie = true;
	joueur._allowJump = true;
	joueurPos = joueur.Position.eta();

	niveau0 = $(".sol").css("top");
	niveau0 = parseInt(niveau0,10) - 2;

	joueurTaille = joueur.Taille.eta();

	$("#console").append(joueurTaille['h']);
	$(".world").append('<div id="player" class="player"></div>');

	$("#player").css('top',niveau0-joueurTaille['h']-joueurPos['x']).css('left',joueurPos['y']);
	$("#player").css('width',joueurTaille['w']).css('height',joueurTaille['h']);
}

function movePlayer(){
	var xXx = niveau0-joueurTaille['h']-joueurPos['x'];
	var duree = 1000;
	$("#player").velocity({ top: xXx,  rotateZ: [0,-90] },{duration:duree/2,
			begin:function(){
				joueur._allowJump = false;
			},
			complete:function(){
			$("#player").velocity({top:niveau0-joueurTaille['h'], rotateZ: [0,-90]},{duration:duree/2, complete:function(){
								joueur._allowJump = true;

			}});
	}
});
}

$(document).ready(function() {

	initPlayer();

});

	$(document).mousedown(function(){
		if(joueur._allowJump){
			console.log('movePlayer : TRUE');
			joueurPos['x'] = joueurPos['x']+150;
			movePlayer()
			joueurPos['x'] = joueurPos['x']-150;
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});