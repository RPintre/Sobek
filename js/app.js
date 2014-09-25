/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
var vitesse = 1;
var framPerfect = [433,1000];
/*-------------------------------------------------*\
				ACTIONS
\*-------------------------------------------------*/
	/* au clic */
	$(document).mousedown(function(){
		if(joueur.checkAllowJump()){
			joueur.getJump();
			recusifJump();
		}else{
			console.log('saut indisponible en l\'air, veillez réessayer plus tard ;)');
		}
	});

	//boucle infini, evolution du jeu
	function boucle(){
		//déclaration du tableau de taille du sol 
		if(joueur.collision(c1) || joueur.getPosition()._posY>500){			
			joueur.setPosition(0,250);
		}
		
		if(!joueur._allowJump){
			$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*500, sequenceQueue: false });
		}

		joueur.gravity();
		joueur.checkAllowJump();
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );
		
		if($.inArray(joueur.getPosition()._posX,framPerfect)!=-1){
        console.log('jump programé');
        joueur.getJump();
        recusifJump();
    	}

		setTimeout(boucle,vitesse);
	};

	//boucle du saut
	function recusifJump(){
		if(!joueur.checkIs_maxJump()){
			joueur.jump();
			setTimeout(recusifJump,vitesse);
		}
	}