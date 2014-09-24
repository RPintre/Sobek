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
		if(joueur.checkAllowJump()){
			joueur.getJump();
			recusifJump();
		}else{
			console.log('t\'es en l\'air connard !');
		}
	});

	function boucle(){
		joueur.gravity();
		joueur.checkAllowJump();
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		setTimeout(boucle,5);
	}

	function recusifJump(){
		if(!joueur.checkIs_maxJump()){
			joueur.jump();
			setTimeout(recusifJump,5);
		}else{
			console.log(joueur.checkIs_maxJump());
		}
	}