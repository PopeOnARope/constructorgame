$(document).ready(function(){
	console.log("ready");

$("button").click(function(e) {
	e.preventDefault();
	buttonfunk( );

});
	
$(".button").append(enemyArray[0]);


var enemyArrayObj = [alien1, aliens3, aliens4];

var buttonfunk = function(weapon, Character) {
	var index = 0;
	var characterLife = enemyArrayObj[i].life
	
	if( characterLife <= 0) {
	$(".button").empty();
		i = i + 1;
	$(".button").append(enemyArray[i]);
	}

	slingshot.attack(enemyArrayObj[i]);
	$(".health").text(enemyArrayObj[i].life);
}

// // function Game() {}

// Game.prototype.contentGen(data) {

// }

// Game.prototype.showHide(data1, data2) {
// 	$(. + data1).hide();
// 	$(. + data2).show();

// }
// var shoot = 





});






// function ButtonFunk(weapon, character) {
// 	weapon.attack(character);
// 	$(".health").text(character.life);
// }
// var kill = new ButtonFunk(slingshot, alien1);