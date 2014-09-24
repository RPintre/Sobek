/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------
function movePlayer(){
	nouvellePos = joueur.getPosition();
	var posYActuel = $("#player").css('top');
	var duree = 1;

	$("#player").velocity({ top: nouvellePos['_posY'],  rotateZ: -1deg },{duration:duree});
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
				joueur.Position._posY = joueur.Position._posY+tailleJump;
				//movePlayer();
				
			/* /test descente */
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});