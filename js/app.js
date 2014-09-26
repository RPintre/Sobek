
/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
var vitesse = 1;
var jumpUp = 35;
var jumpIn = 100;
var framPerfect = [
200-jumpIn,
400-jumpUp,
500-jumpUp,
800-jumpUp,
1000-jumpUp,
1200-jumpUp,
1400-jumpUp,
1420-jumpUp,
1600-jumpUp,
1800-jumpUp,
1820-jumpUp,
1840-jumpUp,
2000-jumpUp,
2000-jumpUp,
2200-jumpUp,
2400-jumpUp,
2600-jumpUp,
2800-jumpUp,
2000-jumpUp,
2200-jumpUp,
2400-jumpUp,
2420-jumpUp,
2600-jumpUp,
2800-jumpUp,
2820-jumpUp,
2840-jumpUp,
3000-jumpUp,
3000
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
		//déclaration du tableau de taille du sol 
		
		for(j=0;j<tabObstacle.length;j++){
			if(j!=0 && tabObstacle[j].collision(joueur)==true || joueur.getPosition()._posY>500){			
				joueur.setPosition(0,300);
			}else if(tabObstacle[j].collision(joueur) == 'jump'){ 
				joueur.checkAllowJump(true);
			}else if(j==0){
				joueur.checkAllowJump(tabObstacle['0'].collision(joueur));
			}
		}
		
		if(joueur.getPosition()._posY>500){			
				joueur.setPosition(0,300);
			}

		if(!joueur._allowJump){
			$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*300, sequenceQueue: false });
		}

		joueur.gravity();

		/*
		testCollision=tabObstacle['0'].collision(joueur);
		joueur.checkAllowJump(testCollision);
		*/

		//avancé dans le monde
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );
		
		//jumpUpe perfrect
		
		if($.inArray(joueur.getPosition()._posX,framPerfect)!=-1){
        	if(joueur._allowJump){
				joueur.getJump();
				recusifJump();
				console.log('saut programmé !');
			}else{
				//console.log('saut programmé indisponible');
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