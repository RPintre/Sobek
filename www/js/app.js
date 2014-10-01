var vitesse = 5;
var mouseETA = false;
// jump perfect
var jumpUp = 60;
var jumpIn = 100;
var framPerfect = [
/*
200-jumpIn,
200,
300,

700-26,
900-26,

1200-jumpIn,
1200,
1300,
1470
*/
];

/*-------------------------------------------------*\
				ACTIONS
\*-------------------------------------------------*/
	/* au clic */
	$(document).mousedown(function(){
		mouseETA = true;
		console.log('mouseETA : true');
	});
	$(document).mouseup(function(){
		mouseETA = false;
		console.log('mouseETA : false');
	});
	$(".container-world").on("tap",function(){
		mouseETA = true;
		console.log('mouseETA : true');
	});


	//boucle infini, evolution du jeu
	function boucle(){
		//on initialise joueur._allowJump
		joueur.checkAllowJump(false);		
		
		//detection de la collision
		for(j=0;j<tabObstacle.length;j++){
			tabObstacle[j].collision(joueur);
		}

		if(joueur.getPosition()._posY>500){			
			joueur.dead();
		}

		//lance la rotation
		if(!joueur._allowJump){
				$("#player").velocity({rotateZ: [0,-180]},{duration: vitesse*100, sequenceQueue: false });
			}

		//gestion de la grativé
		joueur.gravity();


		//avancé dans le monde
		joueur.update(joueur.getPosition()._posX +1,joueur.getPosition()._posY);
		$( "#container-world" ).scrollLeft( joueur.getPosition()._posX-50 );
		
		//jump perfect
		
		if($.inArray(joueur.getPosition()._posX,framPerfect)!=-1){
        	jump();
    	}
    	
    	if(mouseETA){
			jump();
		}
    	//repeat
    	checkfps();
		setTimeout(boucle,vitesse);
	};

	function jump(){
		if(joueur._allowJump){
			joueur.getJump();
			recusifJump();
		}else{
			console.log('saut indisponible en l\'air, veillez réessayer plus tard ;)');
		}
	}
	//boucle du saut
	function recusifJump(){
		if(!joueur.checkIs_maxJump()){
			joueur.jump();
			setTimeout(recusifJump,vitesse);
		}
	}

var lastLoop = new Date;
function checkfps() { 
    var thisLoop = new Date;
    var fps = (thisLoop - lastLoop);
    lastLoop = thisLoop;
    $('#console').html('fps : '+fps);
    return fps;
}