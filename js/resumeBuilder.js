/*

Notes
-----
	- Javascript has no classes.
	- Objects enclosed in '{}' are said to be specified in Object-Literal notation.
	- The 'item' ('item in object') in a 'for-in' loop refers to either the index or key of the object.
	- pageX, pageY, screenX, screenY, clientX, clientY return the number of physical CSS pixels a point is from a reference point. For pageX and pageY, reference point is upper left of browser content area, for screenX and screenY, it is top left of monitor while for clientX and clientY, it is top left of the viewport of browser window. Details here: http://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y.
	- Anonymous functions are those that do not have a name.
	- In jQuery, the '$' is mapped to the 'jQuery' object just to make using it easy.
	- Use jQuery only to modify specific elements of a document and not in bulk.
	- append() and prepend() add children while insertAfter() and insertBefore() add siblings.

*/

// Bio info
var bio = {
	"name": "Tejas Kale",
	"role": "Web Developer",
	"contacts": {
			"mobile": "9876543210",
		"email": "kaletejas2006@gmail.com",
		"github": "tejas-kale",
		"twitter": "@tejaskale",
		"location": "Pune, India"
	},
	"welcomeMessage": "Liberty is not the power of doing what we like, but the right of being able to do what we ought.",
	"skills": ["Web Development", "Cooking", "Data Analysis"],
	"biopic": "images/profile_picture.jpg",
};

// Method to display bio
bio.display = function() {
	// Add name and role to header
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	// Add contact info
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	// Add picture and welcome message
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	// Add skills
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(x in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
		}
	}

	// Add internationalize button
	$("#header").append(internationalizeButton);
}


// Employment info
var work = {
	"jobs": [{
		"employer": "Cumulus Systems Pvt. Ltd.",
		"title": "Lead Analyst",
		"location": "Pune, India",
		"dates": "March 2014 - present",
		"description": "Working on forecasting capacity requirements of large storage arrays."
	},
	{
		"employer": "Inter University Center for Astronomy and Astrophysics",
		"location": "Pune, India",
		"title": "Statistician",
		"dates": "March 2014 - May 2015",
		"description": "Worked on the development of a statistical package 'AstroStat' that aimed to provide an easy interface for performing common analytical exercises in Astronomy and Astrophysics."
	}]
};

// Display work info
work.display = function() {
	for(job in work["jobs"]) {
		$("#work_experience").append(HTMLworkStart);

		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]) + HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]))	;
	}
}


// Eduction info
var education = {
	"schools":[
	{
		"name": "University of Oxford",
		"location": "Oxford, UK",
		"degree": "M.Sc.",
		"majors": "Applied Statistics",
		"dates": "October 2010 - October 2011",
		"url": "http://www.ox.ac.uk/admissions/graduate/courses/msc-applied-statistics"
	},
	{
		"name": "University of Mumbai",
		"location": "Mumbai, India",
		"degree": "B.Sc.",
		"majors": "Statistics",
		"dates": "July 2007 - June 2010",
		"url": "http://www.google.com"
	}],
	"onlineCourses": [
	{
		"title": "Front-end Web Development",
		"school": "Udacity",
		"dates": "October 2015 - present",
		"url": "http://www.udacity.com"
	}]
};

// Display education info
education.display = function() {
	// Append school info
	for(school in education["schools"]) {
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education["schools"][school]["name"]) + HTMLschoolDegree.replace("%data%", education["schools"][school]["degree"]));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education["schools"][school]["dates"]));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education["schools"][school]["location"]));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education["schools"][school]["majors"]));
	}

	// Append online courses info
	for(oc in education["onlineCourses"]) {
		$(".education-entry:last").append(HTMLonlineClasses);

		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education["onlineCourses"][oc]["title"]) + HTMLonlineSchool.replace("%data%", education["onlineCourses"][oc]["school"]));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education["onlineCourses"][oc]["dates"]));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education["onlineCourses"][oc]["url"]));
	}
}


// Projects info
var projects = {
	"projects": [{
		"title": "rd3",
		"dates": "July 2015 - present",
		"description": "R package for piecewise construction of D3 visualizations.",
		"images": []
	},
	{
		"title": "GRG Hunter",
		"dates": "January 2016 - present",
		"description": "R package to (computationally) learn features of Giant Radio Galaxies and spot them in new images.",
		"images": []
	},
	{
		"title": "Finance Advisor",
		"dates": "February 2016 - present",
		"description": "Python scripts to keep track of income and expenditure for suggesting investment options.",
		"images": []
	}]
};

projects.display = function() {
	for(project in projects["projects"]) {
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects["projects"][project]["dates"]));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects["projects"][project]["description"]));

		if(projects["projects"][project]["images"].length > 0) {
			for(img in projects["projects"][project]["images"]) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects["projects"][project]["images"][img]));
			}
		}
	}
}



// Call all display functions in the order they ought to displayed
bio.display();
work.display();
projects.display();
education.display();

// Append map
$("#mapDiv").append(googleMap);