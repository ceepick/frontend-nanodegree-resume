// Biography Object
var bio = {
	"name" : "Cory Pickrel",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "512-787-8871",
		"email" : "cpickrel4@gmail.com",
		"github" : "ceepick",
		"location" : "Austin, TX"
	},
	"welcomeMessage" : "Hey there, friend.",
	"skills" : [
		"Leadership", "Java/J2EE", "iOS Development", 
		"Web Development", "C/C++", "Web Service Development (SOAP/REST)"
	],
	"biopic" : "images/biopic.png"
};
bio.appendContact = function(formattedContactItem) {
	$("#topContacts").append(formattedContactItem);
	$("#footerContacts").append(formattedContactItem);
};
bio.display = function() {
	// Add name and role (hr tag separates following data)
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// Add contact information to list
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	bio.appendContact(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	bio.appendContact(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	bio.appendContact(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	bio.appendContact(formattedLocation);

	// Add picture and greeting
	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	// Iterate through skills and add to page
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	}
};

// Work Object (Prototyping/Dynamic Instantiation for fun)
function Job(employer, title, location, dates, description) {
	this.employer = employer;
	this.title = title;
	this.location = location;
	this.dates = dates;
	this.description = description;
};
function Work(jobs) {
	this.jobs = jobs;
};
var jobs = [
	new Job("Amy's Ice Creams", "Assistant Manager", "Austin, TX", "2003 - 2009", "Make People Happy!"),
	new Job("Texas State University", "Tutor/Lab Instructor", "San Marcos, TX", "2009 - 2011", "Tutor CS and Mathematics Students"),
	new Job("USAA", "Software Developer", "San Antonio, TX", "2011 - Present", "Software Development and Integration")
]
var work = new Work(jobs);
work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		// Add Employer and Title to same line
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
};

// Projects Object
var projects = {
	"projects" : [
		{
			"title" : "Self-Serve Teller Check",
			"dates" : "2012",
			"description" : "Allow members to create and print their own official (cashier) checks at a Financial Center kiosk.",
			"images" : ["images/usaaFinCenter.jpg"]
		},
		{
			"title" : "USAA Biometrics",
			"dates" : "2013",
			"description" : "Allow members to authenticate to USAA using biometrics (face, voice, fingerprint).",
			"images" : ["images/biometrics.jpg"]
		},
		{
			"title" : "USAA Digital Wallet",
			"dates" : "2014",
			"description" : "USAA-Centric Digital Wallet provides access to account and card information.",
			"images" : []
		},
		{
			"title" : "Proprietary Innovation",
			"dates" : "2014 - Present",
			"description" : "These are not the droids you are looking for.",
			"images" : []
		}
	],
	// Literal form to show different function declaration styles
	"display" : function() {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedDescription);

			var formattedImage = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(formattedImage);
		});
	}
};

// Education Object
var education = {
	"schools" : [
		{
			"name" : "Texas State University",
			"location" : "San Marcos",
			"degree" : "Bachelors",
			"majors" : ["Computer Science"],
			"minors" : ["Mathematics"],
			"dates" : "2009 - 2011",
			"url" : "www.txstate.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "http://www.udacity.com"
		}
	]
};
education.display = function() {
	// Iterate over the schools and add them to page
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedMajor);
	});

	$("#education").append(HTMLonlineClasses);
	// Iterate over online courses and add them to page
	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
		$(".education-entry:last").append(formattedOnlineURL);
	});
};

// Display details (out of order to show modularity and lack of dependence on order)
$("#mapDiv").append(googleMap);
projects.display();
work.display();
education.display();
bio.display();