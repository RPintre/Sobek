/*-------------------------------------------------*\
				variable
\*-------------------------------------------------*/
/* Taille du saut */
var tailleJump = 50;
/*-------------------------------------------------*\
				CONSTRUCTEURS
\*-------------------------------------------------*/

	/*-------------------------------------------------*\
					constructeur item
	\*-------------------------------------------------*/
	var construct_item = {
		Taille : {
			_width : 25,
			_height : 25,
			eta : function(){
				var tailleTab = new Object();
				tailleTab['w'] = this._width;
				tailleTab['h'] = this._height;
				return tailleTab;
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
		initDefault : function(){
			this._vie = true;
			this._allowJump = true;
			this.Position._posX = 0;
			this.Position._posY = 50;
		},
		init : function(x, y){
			this._vie = true;
			this._allowJump = true;
			this.Position._posX = x;
			this.Position._posY = y;
		},
		jump : function(){
			console.log(this._allowJump);
			if(this._allowJump==true){
				this._allowJump=false;
				this.Position._posX = this.Position._posX-tailleJump;
			}
		}
	};
	//heritage
	var player = $.extend(construct_player,construct_item);

	/*-------------------------------------------------*\
					constructeur obstacle
	\*-------------------------------------------------*/
	var construct_obstacle = {
		_color : "black",
		init : function(x,y){
			this.Position._posX = x;
			this.Position._posY = y;
		}
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
	\*-------------------------------------------------*/
	var construct_sol = {
		_name : "sol",
		_isActive: true
	};
	var sol = $.extend(construct_sol, obstacle);

	/*-------------------------------------------------*\
					constructeur world
	\*-------------------------------------------------*/