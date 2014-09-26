var vitesse = 1;

// jump perfect
var jumpUp = 60;
var jumpIn = 100;
var framPerfect = [

200-jumpIn,
200,
300,
700-jumpUp,
1000-jumpUp,
1200-jumpUp+20,
1500-120,
1500,
2000
];


/*-------------------------------------------------*\
				ACTIONS
\*-------------------------------------------------*/
	/* au clic */
	$(document).mousedown(function(){
		if(joueur._allowJump){
			joueur.getJump();
			recusifJump();
		}else{
			console.log('saut indisponible en l\'air, veillez réessayer plus tard ;)');
		}
	});

	//boucle infini, evolution du jeu
	function boucle(){
		//on initialise joueur._allowJump
		joueur.checkAllowJump(false);		
		
		//detection de la collision
		for(j=0;j<tabObstacle.length;j++){
			if(j==0){
				tabObstacle[j].collision(joueur);
			}else{
				tabObstacle[j].collision(joueur);
			}
		}

		if(joueur.getPosition()._posY>500){			
			joueur.dead();
		}

		//lance la rotation
		if(!joueur._allowJump){
				$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*500, sequenceQueue: false });
			}

		//gestion de la grativé
		joueur.gravity();


		//avancé dans le monde
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );
		
		//jump perfect
		if($.inArray(joueur.getPosition()._posX,framPerfect)!=-1){
        	if(joueur._allowJump){
				joueur.getJump();
				recusifJump();
				console.log('saut programmé !');
			}
    	}
    	
    	//repeat
		setTimeout(boucle,vitesse);
	};

	//boucle du saut
	function recusifJump(){
		if(!joueur.checkIs_maxJump()){
			joueur.jump();
			setTimeout(recusifJump,vitesse);
		}
	}