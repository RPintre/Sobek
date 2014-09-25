/*-------------------------------------------------*\
				VARIABLES
\*-------------------------------------------------*/
var jumpSize = 60;
var sol = 300;

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
	construct_item.prototype.setSize = function(w,h){
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

	//function
	construct_item.prototype.collision = function(obstacle){
			var rect1 = {x: this.getPosition()._posX, y: this.getPosition()._posY+3, w: this.getSize()._width, h: this.getSize()._height};
			var rect2 = {x: obstacle.getPosition()._posX, y: obstacle.getPosition()._posY, w: obstacle.getSize()._width, h: obstacle.getSize()._height};

			if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x && rect1.y < rect2.y + rect2.h && rect1.h + rect1.y > rect2.y) {
				return true;
			}else{
				return false;
			}
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
		//boolean du jump
		this._allowJump = null;
		this._valMaxJump = null;
		this._is_MaxJump = null;
	}
	// heritage
	construct_player.prototype = new construct_item();
	construct_player.prototype.constructor = construct_player;

	// init
	construct_player.prototype.init = function(){
		this._life = true;
		this._allowJump = true;
		this._is_MaxJump = false;
	}
	construct_player.prototype.update = function(x,y){
		this.setPosition(x,y);	
		$("#player").css('top',y).css('left',x);
	}

	//check
	construct_player.prototype.checkAllowJump = function(){
		console.log(this.collision(redline));
		if(!this.collision(redline)){
			this._allowJump=false;
			return false;
		}else{
			this._allowJump=true;
			$("#player").velocity('stop');
			$("#player").velocity({rotateZ: 0},{duration: 0, sequenceQueue: false});
			return true;
		}
	}

	construct_player.prototype.checkIs_maxJump = function(){
		if(this.getPosition()._posY>=this._valMaxJump){
			this._is_maxJump=false;
			return false;
		}else{
			this._is_maxJump=true;	
			return true;
		}
	}
	construct_player.prototype.getJump = function(){
		this._valMaxJump = this.getPosition()._posY-jumpSize;
		return this._valMaxJump;
	}
	//jump
	construct_player.prototype.jump = function(){
		this.update(this.Position._posX,this.Position._posY-2);
	}
	//recusif jump

	//gravity
	construct_player.prototype.gravity=function(){
		if(!this._allowJump ){
			this.update(this.Position._posX,this.Position._posY+1);
		}
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
	//function
	construct_square.prototype.collision = function(obstacle){
		var rect1 = {x: this.getPosition()._posX, y: this.getPosition()._posY+3, w: this.getSize()._width, h: this.getSize()._height};
		var rect2 = {x: obstacle.getPosition()._posX, y: obstacle.getPosition()._posY, w: obstacle.getSize()._width, h: obstacle.getSize()._height};

		if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x && rect1.y < rect2.y + rect2.h && rect1.h + rect1.y > rect2.y) {
			console.log('collision avec un carre');
			return false;
		}else{
			return false;
		}
	}

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
	//fonction
	/*
	construct_ground.prototype.collision = function(obstacle){
		var rect1 = {x: this.getPosition()._posX, y: this.getPosition()._posY+3, w: this.getSize()._width, h: this.getSize()._height};
		var rect2 = {x: obstacle.getPosition()._posX, y: obstacle.getPosition()._posY, w: obstacle.getSize()._width, h: obstacle.getSize()._height};

		if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x && rect1.y < rect2.y + rect2.h && rect1.h + rect1.y > rect2.y) {
			console.log('collision avec le sol');
			this._allowJump=true;
			return false;
		}else{
			this._allowJump=false;
			return false;
		}
	}
	*/


	/*-------------------------------------------------*\
					annexes
	\*-------------------------------------------------*/

	function pause(millisecondi) {
  var now = new Date();
  var exitTime = now.getTime() + millisecondi;
  while(true) {
  now = new Date();
  if(now.getTime() > exitTime) return;
  }
}