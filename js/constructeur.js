/*-------------------------------------------------*\
				VARIABLES
\*-------------------------------------------------*/
var jump = 20;

/*-------------------------------------------------*\
				CONSTRUCTEUR 
\*-------------------------------------------------*/
	/*-------------------------------------------------*\
					Constructeur item
	\*-------------------------------------------------*/
	function construct_item(){
		this._name = "default";
		this.Size = {
			_width : 20,
			_height : 20
		},
		this.Position = {
			_posX : 0,
			_posY : 0
		}
	}
	// setter
	construct_item.prototype.setTaille = function(w,h){
		this.Size = {
			_width : w,
			_height : h
		}
	}
	construct_item.prototype.setPosition = function(x,y){
		this.Position = {
			_posX : x,
			_posY : y
		}
	}
	construct_item.prototype.setName = function(name){
		this._name = name;
	}
	


	// getter
	construct_item.prototype.getSize = function(){
		return this.Size;
	}
	construct_item.prototype.getPosition = function(){
		return this.Position;
	}
	construct_item.prototype.getName = function(){
		return this._name;
	}

	/*-------------------------------------------------*\
					Constructeur player
	\*-------------------------------------------------*/
	function construct_player(){
		console.log('creation d\'un joueur');
		construct_item.call(this);
		this._name = "player";
		this._color = "orange";
		this._life = null;
		this._allowJump = null;
	}
	// heritage
	construct_player.prototype = new construct_item();
	construct_player.prototype.constructor = construct_player;

	// init
	construct_player.prototype.init = function(){
		this._life = true;
		this._allowJump = false;
	}

	//jump
	construct_player.prototype.jump = function(){
		if (this._allowJump) {
			this.Position._posY = this.Position._posY-jump;
		};
	}

	/*-------------------------------------------------*\
					constructeur obstacle
	\*-------------------------------------------------*/
	function construct_obstacle(){
		console.log('creation d\'un obstacle');
		construct_item.call(this);
		this._name = "obstacle";
		this._color = "black";
		this._borderColor = "white";
	}
	//heritage
	construct_obstacle.prototype = new construct_item();
	construct_obstacle.prototype.constructor = construct_obstacle;

	/*-------------------------------------------------*\
					constructeur triangle
	\*-------------------------------------------------*/
	function construct_triangle(){
		console.log('creation d\'un triangle');
		construct_obstacle.call(this);
		this._name = "triangle";
	}
	//heritage
	construct_triangle.prototype = new construct_obstacle();
	construct_triangle.prototype.constructor = construct_triangle;

	/*-------------------------------------------------*\
					constructeur carre : square
	\*-------------------------------------------------*/
	function construct_square(){
		console.log('creation d\'un carré');
		construct_obstacle.call(this);
		this._name = "carre";
	}
	//heritage
	construct_square.prototype = new construct_obstacle();
	construct_square.prototype.constructor = construct_square;

	/*-------------------------------------------------*\
					constructeur sol : ground
	\*-------------------------------------------------*/
	function construct_ground(){
		console.log('creation d\'un sol');
		construct_obstacle.call(this);
		this._name = "sol";
	}
	//heritage
	construct_ground.prototype = new construct_obstacle();
	construct_ground.prototype.constructor = construct_ground;