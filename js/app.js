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
		
			joueur.jump();
			joueur.check();
		

			/* test descente */
				//movePlayer();
				
			/* /test descente */
		
	});
	function boucle(){
		joueur.gravity();
		joueur.check();
		setTimeout(boucle,30);
	}
