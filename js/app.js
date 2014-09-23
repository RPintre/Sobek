/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
function movePlayer(){
	nouvellePos = joueur.Position.eta();
	var posYActuel = $("#player").css('top');
	console.log('posYActuel : '+posYActuel+', nouvellePos'+nouvellePos['y']);
	var duree = 1000;

	$("#player").velocity({ top: nouvellePos['y'],  rotateZ: [0,-90] },{duration:duree/2,
		complete:function(){
				joueur.collision(redline);
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
				joueur.Position._posY = joueur.Position._posY+tailleJump;
				movePlayer();
				
			/* /test descente */
		}else{
			console.log('movePlayer : FALSE');
			return false;
		}
	});