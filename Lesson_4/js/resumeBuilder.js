var bio = {
	"name": "Éderson Lehugeur",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(51) 99999-9999",
		"email": "eder@example.com",
		"github": "edersonlehugeur",
		"facebook": "@edersonlehugeur",
		"location": "San Franciso"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc.",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, FL, US",
			"degree": "BA",
			"major": ["CompSci", "French"],
			"dates": 2003,
			"url": "http://example.com"
		}, 
		{
			"name": "Nova Southeastern University",
			"city": "Fort Lauderdale, FL, US",
			"degree": "Masters",
			"major": ["CompSci"],
			"dates": 2013,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes..."
		},
		{
			"employer": "Panucce's Pizza",
			"title": "Delivery Boy",
			"dates": "1998 - Desember 31, 1991",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes..."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": 2014,
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes...",
			"images": [
				"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
				"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
			]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);