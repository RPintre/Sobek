$(document).ready(function() {

	/* creation sol */
	redline = new construct_ground();
	redline.setPosition(0,400);
	redline.setSize(3500,1);
	
	niveau0 = redline.getPosition()._posY-redline.getSize()._height;

	/* creation du joueur */
	joueur = new construct_player();
	joueur.init();
	joueur.setPosition(0,360);
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	/*-------------------------------------------------*\
					Création des obstacles
	\*-------------------------------------------------*/
	tabObstacle = new Array(
		{_type : "carre",	_posX:200,_posY:niveau0-20},
		{_type : "carre",	_posX:400,_posY:niveau0-20},
		{_type : "triangle",_posX:600,_posY:niveau0-20},
		{_type : "triangle",_posX:800,_posY:niveau0-20},
		{_type : "carre",	_posX:1000,_posY:niveau0-20},
		{_type : "triangle",_posX:1200,_posY:niveau0-20},
		{_type : "carre",	_posX:1400,_posY:niveau0-20},
		{_type : "triangle",_posX:1420,_posY:niveau0-20},
		{_type : "carre",	_posX:1600,_posY:niveau0-20},
		{_type : "triangle",_posX:1800,_posY:niveau0-20},
		{_type : "triangle",_posX:1820,_posY:niveau0-20},
		{_type : "triangle",_posX:1840,_posY:niveau0-20},
		//saut de 2 cases en hauteur
		{_type : "carre",	_posX:2000,_posY:niveau0-20},
		{_type : "triangle",_posX:2000,_posY:niveau0-40},

		{_type : "carre",	_posX:2200,_posY:niveau0-20},
		{_type : "carre",	_posX:2400,_posY:niveau0-20},
		{_type : "triangle",_posX:2600,_posY:niveau0-20},
		{_type : "triangle",_posX:2800,_posY:niveau0-20},
		{_type : "carre",	_posX:2000,_posY:niveau0-20},
		{_type : "triangle",_posX:2200,_posY:niveau0-20},
		{_type : "carre",	_posX:2400,_posY:niveau0-20},
		{_type : "triangle",_posX:2420,_posY:niveau0-20},
		{_type : "carre",	_posX:2600,_posY:niveau0-20},
		{_type : "triangle",_posX:2800,_posY:niveau0-20},
		{_type : "triangle",_posX:2820,_posY:niveau0-20},
		{_type : "triangle",_posX:2840,_posY:niveau0-20},
		//saut de 2 cases en hauteur
		{_type : "carre",	_posX:3000,_posY:niveau0-20},
		{_type : "triangle",_posX:3000,_posY:niveau0-40}
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


