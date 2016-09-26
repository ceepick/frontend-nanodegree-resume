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
	"welcomeMessage" : "Hey there, Steam.",
	"skills" : [
		"Java", "iOS", "Web Development"
	],
	"biopic" : "images/biopic.png"
}
bio.display = function() {
	// Add name and role (hr tag separates following data)
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// Add contact information to list
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// Add picture and greeting
	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	// Iterate through skills and add to page
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(item) {
			var skill = HTMLskills.replace("%data%", item);
			$("#skills").append(skill);
		});
	}
}

// Work Object
var work = {
	"jobs" : [
		{
			"employer" : "Amy's Ice Creams",
			"title" : "Assistant Manager",
			"location" : "Austin, TX",
			"dates" : "2003 - 2009",
			"description" : "Making people happy!"
		},
		{
			"employer" : "Texas State University",
			"title" : "Tutor",
			"location" : "San Marcos, TX",
			"dates" : "2009 - 2011",
			"description" : "Tutoring Computer Science Students"
		},
		{
			"employer" : "USAA",
			"title" : "Software Developer",
			"location" : "San Antonio, TX",
			"dates" : "2011 - Present",
			"description" : "Software Engineering and Integration"
		},
	]
}
work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
}

// Projects Object
var projects = {
	"projects" : [
		{
			"title" : "Self-Serve Teller Check",
			"dates" : "2012",
			"description" : "Allow members to create and print their own official (cashier) checks at a kiosk",
			"images" : []
		},
		{
			"title" : "USAA Biometrics",
			"dates" : "2013",
			"description" : "Allow members to authenticate to USAA using biometrics (face, voice, fingerprint)",
			"images" : []
		}
	],
	// Just to show different declaration styles. I didn't see this on the style guide - which is preferred?
	"display" : function() {
		projects.projects.forEach(function(item) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
			$(".project-entry:last").append(formattedDescription);

			// var formattedImage = HTMLprojectImage.replace("%data%", item.image);
			// $(".project-entry:last").append(formattedImage);
		});
	}
}

// Education Object
var education = {
	"schools" : [
		{
			"name" : "Texas State University",
			"location" : "San Marcos",
			"degree" : "Bachelors",
			"majors" : ["Computer Science"],
			"minors" : ["Mathematics"],
			"dates" : "2009 - 2011"
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
}
education.display = function() {
	education.schools.forEach(function(school) {
		// Schools
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

	// Online Courses
	$("#education").append(HTMLonlineClasses);

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
}

// Display details
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);












































