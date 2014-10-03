
$(document).ready(function() {
	$.mobile.touchOverflowEnabled = true;
	$.mobile.silentScroll($("#container_world").css("width"));
	niveau0 = 381;
	/* creation du joueur */
	joueur = new construct_player();
	joueur.init();
	joueur.setPosition(0,370);
	joueurTaille = joueur.getSize();	
	joueurPos = joueur.getPosition();

	/*-------------------------------------------------*\
					Création des obstacles
	\*-------------------------------------------------*/
	tabObstacle = new Array(
		{_type : "sol",		_posX:0,_posY:400},
		{_type : "carre",	_posX:200,_posY:niveau0-20},
		{_type : "carre",	_posX:300,_posY:niveau0-50},
		{_type : "carre",	_posX:400,_posY:niveau0-80},
		{_type : "carre",	_posX:469,_posY:niveau0-50},

		//saut de 2 cases en hauteur
		{_type : "triangle",_posX:700,_posY:niveau0},
		{_type : "triangle",_posX:900,_posY:niveau0},

		{_type : "carre",	_posX:1200,_posY:niveau0-20},
		{_type : "carre",	_posX:1300,_posY:niveau0-50},
		{_type : "carre",	_posX:1400,_posY:niveau0-80},
		{_type : "carre",	_posX:1469,_posY:niveau0-50},
		//nouveau sol
		{_type : "sol",		_posX:1600,_posY:niveau0},

		//dead
		{_type : "triangle",_posX:2000,_posY:niveau0-20}
	);
	for (var i = 0; i < tabObstacle.length; i++) {
		var X = tabObstacle[i]["_posX"];
		var Y = tabObstacle[i]["_posY"];
		if(tabObstacle[i]["_type"] == "carre"){
			tabObstacle[i] = new construct_square();
			tabObstacle[i].setPosition(X,Y);
			$(".world").append('<div id="carre'+i+'" class="carre"></div>');
			$("#carre"+i).css('left',X).css('top',Y);
			//$("#carre"+i).css('width','20').css('height','20');

		}else if(tabObstacle[i]["_type"] == "triangle"){
			tabObstacle[i] = new construct_triangle();
			tabObstacle[i].setPosition(X,Y);
			$(".world").append('<div id="triangle'+i+'" class="triangle"></div>');
			$("#triangle"+i).css('left',X).css('top',Y-10);
			//$("#triangle"+i).css('border','10px solid transparent').css('border-bottom','20px solid transparent');

		}else if(tabObstacle[i]["_type"] == "sol"){
			tabObstacle[i] = new construct_ground();
			tabObstacle[i].setPosition(X,Y);
			tabObstacle[i].setSize(1400,20);
			$(".world").append('<div id="sol'+i+'" class="sol"></div>');
			$("#sol"+i+"").css('left',X).css('top',Y);
			$("#sol"+i+"").css('width','1400').css('height','1');
		}else{
			console.log('type inconnu');
		}
	};

	/*-------------------------------------------------*\
					joueur
	\*-------------------------------------------------*/
	// on ajoute le joueur au monde 
	$(".world").append('<div id="player" class="player"></div>');
	//on place le joueur dans le monde (en css)
	$("#player").css('top',joueur.getPosition()._posY).css('left',joueur.getPosition()._posX);
	$("#player").css('width',joueur.getSize()._width).css('height',joueur.getSize()._height);

});


