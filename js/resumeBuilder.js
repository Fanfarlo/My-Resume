var bio = {
    "name": "Miguelo Malpartida",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+51 998225489",
        "email": "<a href=\"mailto:miguelo.mgmt@gmail.com\">miguelo.mgmt@gmail.com<\/a>",
        "github": "<a href=\"https:\/\/github.com\/Fanfarlo\">https://github.com/Fanfarlo<\/a>",
        "location": "Lima-Perú"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["HTML", "CSS", "JavaScript", "Responsive Design", "Managment Business", "Spanish/English"],
    "biopic": "images\/miguelo.jpg"
};

var education = {
    "schools": [{
        "name": "Universidad Tecnológica del Perú",
        "location": "Jesús María, Lima-Perú",
        "degree": "Bachelor Degree",
        "majors": ["Computer Information Systems"],
        "dates": "2010-2015",
        "url": "http://www.utp.edu.pe"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-Now",
        "url": "<a href=\"https:\/\/www.udacity.com\">https://www.udacity.com<a>"
    }]
};

var work = {
    "jobs": [{
        "employer": "Transportes Malpartida",
        "title": "Business Manager Assistant",
        "dates": "2013 - present",
        "location": "Lince, Lima-Perú",
        "description": "Removals Business which is working in Lima, Perú for 20 years and continue giving a quality service for everyone",
        "web": "http:\/\/transportesmalpartida.com"
    }]
};

var projects = {
    projects: [{
            "title": "Transportes Malpartida Website",
            "dates": "April - June 2016",
            "description": "Transportes Malpartida site was develop to increse the number of clients and give a better experience on any device",
            "images": ["images\/transportes.jpg"],
            "link": "http:\/\/transportesmalpartida.com"
        },
        {
            "title": "My Resume in JavaScript",
            "dates": "February 2017",
            "description": "My resume was build to apply for a job as a Web Developer. I used JavaScript and JQuery to create this page",
            "images": ["images\/resume.jpg"],
            "link": "http:\/\/transportesmalpartida.com"
        },
        {
            "title": "My Portafolio Website",
            "dates": "January - 2017",
            "description": "My Portafolio site is my first project in Udacity. I used HTML, CSS and Resposive Design",
            "images": ["images\/portafolio.jpg"],
            "link": "http:\/\/transportesmalpartida.com"
        }
    ]
};
//navbar
var displayNavigation = function() {
    $('#header').append(navBarContent);
};
//Replace data in every step
var data = '%data%';

bio.display = function() {
    //#header and #topContacts
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);
    var formattedHTMLheaderName = HTMLheaderName.replace(data, bio.name);
    $("#header").prepend(formattedHTMLheaderName);
    var formattedHTMLbioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedHTMLbioPic);
    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedHTMLwelcomeMsg);
    //skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        });
    }

    var formattedHTMLmobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedHTMLemail = HTMLemail.replace(data, bio.contacts.email);
    var formattedHTMLgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace(data, bio.contacts.location);
    //Append content to more than one selector
    $("#topContacts, #footerContacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTittle = HTMLprojectTitle.replace(data, project.title).replace("#", project.link);
        $(".project-entry:last").append(formattedTittle);
        var formattedDate = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedDescription);
        //loop images
        project.images.forEach(function(image) {
            var formattedHTMLprojectImage = HTMLprojectImage.replace(data, image);
            $(".project-entry:last").append(formattedHTMLprojectImage);
        });
    });
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer).replace("#", job.web);
        var formattedTittle = HTMLworkTitle.replace(data, job.title);
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        var formattedEmployerTittle = formattedEmployer + formattedTittle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedEmployerTittle);
    });

};

education.display = function() {
    //schools
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedHTMLschoolName = HTMLschoolName.replace(data, school.name).replace("#", school.url);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, school.location);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace(data, school.majors);
        var formattedHTMLschoolDates = HTMLschoolDates.replace(data, school.dates);
        var formattedSchoolFinal = formattedHTMLschoolName + formattedHTMLschoolDegree + formattedHTMLschoolLocation + formattedHTMLschoolDates + formattedHTMLschoolMajor;
        $(".education-entry:last").append(formattedSchoolFinal);

    });
    //onlineCourses
    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace(data, course.title);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace(data, course.school);
        $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
        var formattedHTMLonlineDates = HTMLonlineDates.replace(data, course.dates);
        $(".education-entry:last").append(formattedHTMLonlineDates);
        var formattedHTMLonlineURL = HTMLonlineURL.replace(data, course.url);
        $(".education-entry:last").append(formattedHTMLonlineURL);
    });
};

function newClass() {
    var rolNew = $('#name').next();
    rolNew = rolNew.addClass('style-role');
    return rolNew;
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
education.display();
work.display();
projects.display();
newClass();
displayNavigation();

$("#inter-button").append(internationalizeButton);
$("#mapDiv").append(googleMap);
