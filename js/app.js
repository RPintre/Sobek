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
		//déclaration du tableau de taille du sol 
		//console.log(joueur.getPosition());

		Xsize_Ground=redline.getSize();
		//ancienne fonction gravity avec en paramètre la position en X à laquelle il Tombe!
			//(commentaire au commentaire :) le -1000 c'est pour que ca tombe bien a la fin du background qui fait 4000 et pas de redline qui fait 5000px de long j'avais la fleime de récupérer la variable css de la div prénomée "world":):)
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