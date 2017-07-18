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

