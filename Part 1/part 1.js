//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

//////////////////////// TEST SCRIPT ////////////////////////////////////
var RBK = School();
RBK.addStd(RBK.makeStd("Saed homsy",31,"Network engineering","Syrian"));
RBK.addStd(RBK.makeStd("Muhannad Bakkar",25,"dentist","jordanian"));
console.log(RBK.showFriend(RBK.ArrOfStds[0]));
console.log(RBK.ArrOfStds);
console.log(RBK.avergeStudents());
//////////////////////// TEST SCRIPT ////////////////////////////////////

function School(){
	var students = {};
	students.ArrOfStds = [];
	students.makeStd = makeStd;
	students.addStd = addStd;
	students.showFriend = showFriend;
	students.avergeStudents = avergeStudents;

	return students;
}


var makeStd = function(name,age,education,nationality){
	return{
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}

var addStd = function(obj){
	this.ArrOfStds.push(obj);
	return obj['name'] + " added successfully";
}

var showFriend = function(obj){
	return obj['name'] + " with the age of " + obj['age'] + " and with " + obj['education'] + " education";
}

var avergeStudents = function(arrOfObj){
	var sumAges = 0;
	this.ArrOfStds.forEach(function(obj,i){
		sumAges+= obj['age'];
	})
	return sumAges/this.ArrOfStds.length;
}



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

function square(number){
	return Math.pow(number,2);
}

function rangeSquared(num1,num2){
	if(num2 !== undefined){
		for (var i = num1; i <= num2; i++) {
			if(i%2===0){
				console.log(square(i));
			}
		}
	}else{
		(num1 % 2 === 0) ? console.log(num1) : console.log(null);
	}
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leader(arr){
	var flage = true
	var output = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i; j < arr.length; j++) {
			if(arr[i]<arr[j]){
				flage = false
			}
		}
		if (flage === true){
			output.push(arr[i]);
		}else{
			flage = true;
		}
	}
	return output;
}