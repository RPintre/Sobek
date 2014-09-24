/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
var vitesse = 1;
/*-------------------------------------------------*\
				ACTIONS
\*-------------------------------------------------*/
	/* au clic */
	$(document).mousedown(function(){
		if(joueur.checkAllowJump()){
			joueur.getJump();
			recusifJump();
			$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*1000, sequenceQueue: false })

		}else{
			console.log('t\'es en l\'air connard !');
		}
	});

	//boucle infini, evolution du jeu
	function boucle(){
		joueur.gravity();
		joueur.checkAllowJump();
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );

		setTimeout(boucle,vitesse);
	}

	//boucle du saut
	function recusifJump(){
		if(!joueur.checkIs_maxJump()){
			joueur.jump();
			setTimeout(recusifJump,vitesse);
		}
	}