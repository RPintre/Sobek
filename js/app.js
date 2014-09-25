
/*-------------------------------------------------*\
				FONCTIONS VISUELLES
\*-------------------------------------------------*/
var vitesse = 1;
var fram = 37;
var framPerfect = [
200-100,
400-fram,
600-fram,
800-fram,
1000-fram,
1200-fram,
1400-fram,
1420-fram,
1600-fram,
1800-fram,
1820-fram,
1840-fram,
//saut 2 cases en hauteur
2000-fram-20,

2200-fram,
2400-fram,
2600-fram,
2800-fram,
2000-fram,
2200-fram,
2400-fram,
2420-fram,
2600-fram,
2800-fram,
2820-fram,
2840-fram,
3000-fram-20
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
			if(tabObstacle[j].collision(joueur) || joueur.getPosition()._posY>500){			
				joueur.setPosition(0,370);
			}
		}
		if(!joueur._allowJump){
			$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*300, sequenceQueue: false });
		}

		joueur.gravity();
		joueur.checkAllowJump();
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );
		
		if($.inArray(joueur.getPosition()._posX,framPerfect)!=-1){
        	if(joueur._allowJump){
				joueur.getJump();
				recusifJump();
				console.log('saut programmé !');
			}else{
				//console.log('saut programmé indisponible');
			}
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