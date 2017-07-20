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

var nameTest = "charLIe chaplIN";
var finalName;
console.log(finalName);

var num = 15;
console.log(String.replace(num, /5/, '2'));

