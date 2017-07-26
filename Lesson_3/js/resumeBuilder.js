//$("#main").append("Charlie Chaplin");

/*
var firstName = "Eddye";
var age = 32;
console.log(firstName);
*/

/*
var awesomeThoughts = "I am Eddye and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
$("#main").append(funThoughts);
*/

/*
var s = "audacity";

var udacityizer = function(s) {
	s = s[1].toUpperCase() + s.slice(2);
	
	return s;
}

console.log(udacityizer(s));
*/

var name = "Éderson Lehugeur";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
var skills = ["awesomeness", "programming", "teaching", "JS"];
var numbers = [0, 1, 2, 3];

$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.length);

$("#main").append(numbers);
numbers.pop();
$("#main").append(numbers);
numbers.push(3);
numbers.push(4);
$("#main").append(numbers);
*/

/*
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
	// Atribuição por valor. Fará uma cópia do array para não modificar o original.
	var newArray = _array.slice();
	// Atribuição por referência.
	//var newArray = _array;
    var lastValue = newArray.pop();
    newArray.push(lastValue + 1);

    return newArray;
};

console.log(incrementLastArrayElement(sampleArray));
*/

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
	// Atribuição por referência.
    var finalName = oldName;
    // Your code goes here!
	var names = oldName.split(" ");
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	// Une elementos de um array em uma única string com espaços entre os elementos.
    finalName = names.join(" ");
	
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


