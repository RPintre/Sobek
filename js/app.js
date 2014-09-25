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
		}else{
			console.log('t\'es en l\'air connard !');
		}
	});

	//boucle infini, evolution du jeu
	function boucle(){
		//déclaration du tableau de taille du sol 
		if(joueur.collision(c1) || joueur.getPosition()._posY>500){			
			setTimeout(joueur.setPosition(0,250));
		}
		
		if(!joueur._allowJump){
			$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*500, sequenceQueue: false });
		}

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