function Character(name, life) {
	this.name = name;
	this.life = life;
}
// Character.prototype.isdead() {

// }


var i =0

function Weapon(name, damage){
	this.name = name;
	this.damage = damage;
	this.attack = function(target){
		var newlife = target.life-this.damage;
		console.log(target);
		target.life = newlife;
		if(newlife <= 0) {
			target.isdead = true;
			alert("alien dead!");
			// killalien.doingSomething();
		}
	};

};

// function Alien(name, power, life)
// 	this.name = name;
// 	this.power = power;
// 	this.life = life;



var mario = new Character("mario", 100);

var slingshot = new Weapon("slingshot", 50);

var laser = new Weapon("laser", 100);

var alien1 = new Character("Alien1", "100");

var aliens3 = new Character("3 Aliens!", "300");

var aliens4 = new Character("4 aliens!", "400");



