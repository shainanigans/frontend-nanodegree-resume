var bio = {
    "name": "Shaina Koval",
    "role": "Designer and Front-End Dev",
    "contact": {
        "email": "me@examle.com",
        "github": "shainanigans",
        "location": "Sydney"
    },
    "picture": "images/shaina-smile-crop.png",
    "welcome": "It's nice to meet you.",
    "skills": [
        "Graphic Design",
        "Web Design",
        "HTML",
        "CSS",
        "Photoshop",
        "InDesign",
        "Illustrator"
    ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contact);
var formattedPicture = HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//$("#main").append(formattedContact);
$("#main").append(formattedPicture);
$("#main").append(formattedWelcome);
//$("#main").append(formattedSkills);

var work = {
    "position": "Designer and Front-End Dev",
    "employer": "Shaina Koval Design & Illustration",
    "years": 5,
    "city": "Everywhere"
}

var education = {
    "schools": [
        {
            "name": "Vassar College",
            "dates": "August 2007 - June 2009",
            "city": "Poughkeepsie, NY, USA",
            "url": "http://www.vassar.edu"
        },
        {
            "name": "Pratt Institute",
            "graduation": "February 2010",
            "degree": "BFA",
            "major": "Communications Design",
            "city": "Brooklyn, NY, USA",
            "url": "http://www.pratt.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}

$("#main").append(work["position"]);
$("#main").append(education.name);