/*-------------------------------------------------*\
				CONSTRUCTEURS
\*-------------------------------------------------*/

	/*-------------------------------------------------*\
					constructeur item
	\*-------------------------------------------------*/
	var construct_item = {
		Taille : {
			_width : 50,
			_height : 50,
			eta : function(){
				var tailleTab = new Object();
				tailleTab['w'] = this._width;
				tailleTab['h'] = this._height;
				return tailleTab;
			},
			print : function(){
				return 'position en x : ' + this._width +' et en y : '+this._height;
			}
		},

		Position : {
			_posX : 0,
			_posY : 50,
			eta : function(){
				var posTab = new Object();
				posTab['x'] = this._posX;
				posTab['y'] = this._posY;
				return posTab;
			},
			print : function(){
				return 'position en x : ' + this._posX +' et en y : '+this._posY;
			}
		}
	};

	/*-------------------------------------------------*\
					constructeur player
	\*-------------------------------------------------*/
	var construct_player = {
		_name : "default",
		_color : "orange",
		_vie : null,
		_allowJump : null,
		setterName : function(name){
			this._name = name;
		}
	};
	//heritage
	var player = $.extend(construct_player,construct_item);

	/*-------------------------------------------------*\
					constructeur obstacle
	\*-------------------------------------------------*/
	var construct_obstacle = {
		_color : "black"
	};
	//heritage
	var obstacle = $.extend(construct_obstacle,construct_item);

	/*-------------------------------------------------*\
					constructeur triangle
	\*-------------------------------------------------*/
	var construct_triangle = {
		_name : "triangle"
	};
	// constructeur triangle
	var triangle = $.extend(construct_triangle,obstacle);

	/*-------------------------------------------------*\
					constructeur carre
	\*-------------------------------------------------*/
	var construct_carre = {
		_name : "carre"
	};
	// constructeur carre
	var carre = $.extend(construct_carre,obstacle);

	/*-------------------------------------------------*\
					constructeur sol
	\*-------------------------------------------------

	var sol = $.extend(construct_sol,)
	*/

	/*-------------------------------------------------*\
					constructeur world
	\*-------------------------------------------------*/