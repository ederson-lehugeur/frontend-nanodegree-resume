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

var skills = ["awesomeness", "programming", "teaching", "JS"];

/*
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

/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
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
*/

// Objeto literal.
var bio = {
	"name": "Éderson Lehugeur",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(51) 99999-9999",
		"email": "eder@example.com",
		"github": "edersonlehugeur",
		"facebook": "@edersonlehugeur",
		"location": "Porto Alegre"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc.",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"bioPic": "images/fry.jpg"
};

$("#main").append(bio.name);

/*
// Notação de ponto.
// Cria uma nova propriedade e a define.
bio.city = "Porto Alegre";
bio.email = "eder@example.com";
*/

/*
// Notação de colchete.
bio["city"] = "Porto Alegre";
bio["email"] = "eder@example.com";
*/

var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.years = 0.3;

var education = {};
education["name"] = "Nova Southeastern University";
education["years"] = "2005 - 2013";
education["city"] = "Fort Lauderdale, FL, US";

$("#main").append(work["position"]);
$("#main").append(education.name);