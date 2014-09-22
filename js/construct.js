/*-------------------------------------------------*\
				CONSTRUCTEURS
\*-------------------------------------------------*/

	/*-------------------------------------------------*\
					constructeur item
	\*-------------------------------------------------*/
	var construct_item = {
		Taille : {
			_width : 15,
			_height : 15,
			eta : function(){
				return '[' + this._width +', '+this._height+']';
			}
		},

		Position : {
			_posX : 15,
			_posY : 0,
			eta : function(){
				return '[' + this._posX +', '+this._posY+']';
			}
		}
	};

	/*-------------------------------------------------*\
					constructeur player
	\*-------------------------------------------------*/
	var construct_player = {
		_name : "default",
		_color : "orange",
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