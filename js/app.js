

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
	$("#player").velocity({ top: xXx,  rotateZ: "120deg" },{duration:500,
			begin:function(){
				joueur._allowJump = false;
			},
			complete:function(){
			joueur._allowJump = true;
			$("#player").velocity("reverse");
	}
});
}

$(document).ready(function() {

	initPlayer();

});

	$(document).on('click',function(){
		if(joueur._allowJump){
			console.log('movePlayer');
			joueurPos['x'] = joueurPos['x']+50;
			movePlayer()
			joueurPos['x'] = joueurPos['x']-50;
		}
	});