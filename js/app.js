/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
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

/*-------------------------------------------------*\
				ACTIONS
\*-------------------------------------------------*/
	/* au clic */
	$(document).mousedown(function(){
		if(joueur._allowJump){
			joueur.jump();
			movePlayer();

			/* test descente */
				joueur.Position._posX = joueur.Position._posX+tailleJump;
				movePlayer();
				joueur.collision(redline);
			/* /test descente */
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});