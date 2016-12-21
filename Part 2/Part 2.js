//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....



function Player(name){
	var player = {};

	player.playerInfo = {name:name};
	player.addInfo = addInfo;
	player.increaseLevel = increaseLevel;

	return player;
}

var addInfo = function(age,position,level,availability){
	this.playerInfo['age']=age;
	this.playerInfo['position']=position;
	this.playerInfo['level']=level;
	this.playerInfo['availability']=availability;
}

var increaseLevel = function(num){
	this.playerInfo['level'] += num;
}

var isAvailable = function(){
	if(this.playerInfo['availability']){
		return true;
	}
	return false;
}

var player1 = Player("Saleem Bakri");
player1.addInfo(23,"defence",5,true);

var player2 = Player("Ahmed mardini");
player2.addInfo(31,"middle",3,false);

var player3 = Player("Omar mousa");
player3.addInfo(29,"Attack",7,true);

var player4 = Player("Yasser alhaj");
player4.addInfo(32,"goalkeeper",10,false);

var players = [];
players.push(player1.playerInfo,player2.playerInfo,player3.playerInfo,player4.playerInfo);

function decLevel(players){
	players.forEach(function(player,i){
		if(player['age'] > 30){
			player['level']-=1;
		}
	})
}

function sortPalyerBy(arr,key){
	return arr.sort(function(a,b){
		a[key] - b[key];
	})	
}



//////////////////////// TEST SCRIPT ////////////////////////////////////
// decLevel(players);
// console.log(player4.playerInfo);
//console.log(sortPalyerBy(players,"name"));
//console.log(players);
//////////////////////// TEST SCRIPT ////////////////////////////////////