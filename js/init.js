$(document).ready(function() {

	/* creation sol */
	redline = new construct_ground();
	redline.setPosition(0,400);
	redline.setSize(4000,2);
	
	niveau0 = redline.getPosition()._posY-redline.getSize()._height;

	/* creation du joueur */
	joueur = new construct_player();
	joueur.init();
	joueur.setPosition(0,300);
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	/*-------------------------------------------------*\
					Création des obstacles
	\*-------------------------------------------------*/
	tabObstacle = new Array(
		{_type : "carre",_posX:200,_posY:niveau0-20},
		{_type : "carre",_posX:400,_posY:niveau0-20},
		{_type : "triangle",_posX:600,_posY:niveau0-20},
		{_type : "carre",_posX:700,_posY:niveau0-20},
		{_type : "triangle",_posX:800,_posY:niveau0-20},
		{_type : "carre",_posX:1000,_posY:niveau0-20},
		{_type : "triangle",_posX:1200,_posY:niveau0-20},
		{_type : "carre",_posX:1400,_posY:niveau0-20}
	);

	for (var i = 0; i < tabObstacle.length; i++) {
		var X = tabObstacle[i]["_posX"];
		var Y = tabObstacle[i]["_posY"];
		if(tabObstacle[i]["_type"] == "carre"){
			tabObstacle[i] = new construct_square();
			tabObstacle[i].setPosition(X,Y);
			$(".world").append('<div id="o'+i+'" class="carre"></div>');

		}else if(tabObstacle[i]["_type"] == "triangle"){
			tabObstacle[i] = new construct_triangle();
			tabObstacle[i].setPosition(X,Y);
			$(".world").append('<div id="o'+i+'" class="triangle"></div>');

		}else{
			console.log('type inconnu');
		}
		
		$("#o"+i).css('left',X).css('top',Y);
		$("#o"+i).css('width','20').css('height','20');
		
	};
	console.log(tabObstacle);
	/*-------------------------------------------------*\
					Graphique
	\*-------------------------------------------------*/
	//on ajoute le sol au monde

	$(".world").append('<div id="sol" class="sol"></div>');
	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');

	//on place le sol dans le monde (en css)
	$("#sol").css('top',niveau0);
	$("#sol").css('width',redline.getSize()._width).css('height',redline.getSize()._height);

	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueur.getPosition()._posY).css('left',joueur.getPosition()._posX);
	$("#player").css('width',joueur.getSize()._width).css('height',joueur.getSize()._height);

});


