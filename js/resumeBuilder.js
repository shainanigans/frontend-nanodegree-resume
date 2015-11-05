/***********
    BIO
***********/
var bio = {
    "name": "Shaina Koval",
    "role": "Designer and Front-End Developer",
    "contacts": {
        "email": "me@shainakoval.com",
        "website": "www.shainakoval.com",
        "github": "shainanigans",
        "location": "Sydney"
    },
    "picture": "images/shaina-smile-crop.png",
    "welcomeMessage": "It's nice to meet you.",
    "skills": [
        "Graphic Design",
        "Web Design",
        "HTML",
        "CSS",
        "WordPress",
        "PHP",
        "JavaScript",
        "jQuery",
        "MailChimp",
        "Photoshop",
        "InDesign",
        "Illustrator",
        "Microsoft Office",
        "Mac OSX",
        "Windows",
        "Time Management",
        "Communication",
        "Organisation"
    ]
}

bio.display = function() {
    var bioPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").prepend(bioPic);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", "<a href='mailto:"+bio.contacts.email+"'>"+bio.contacts.email+"</a>");
    $("#topContacts").append(formattedEmail);

    var formattedWebsite = HTMLblog.replace("%data%", "<a target='_blank' href='http://"+bio.contacts.website+"'>"+bio.contacts.website+"</a>").replace("blog", "website");
    $("#topContacts").append(formattedWebsite);

    var formattedGitHub = HTMLgithub.replace("%data%", "<a target='_blank' href='http://www.github.com/"+bio.contacts.github+"'>"+bio.contacts.github+"</a>");
    $("#topContacts").append(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);

                $("#skills").append(formattedSkill);
            }
        }
    }
}

bio.display();

/***********
    WORK
***********/
var work = {
    "jobs": [
        {
            "title": "Designer, Front-End Developer and Illustrator",
            "employer": "Shaina Koval Design & Illustration",
            "dates": "Dec 2010 - Present",
            "location": "NYC, San Francisco, Christchurch and Sydney",
            "description": "By managing my time effectively, I have continued freelance work on design and illustration projects while working full- time positions. My freelance work has included: <ul><li>New company branding projects involving web design and development, logo design, business cards, vehicle graphics, and more.</li> <li>Illustrations for zines, posters, merchandising, essays.</li> <li>Self-promotion on my personal website and Facebook. Managing projects and client relations.</li></ul>"
        },
        {
            "title": "Graphics Design and Digital Media Exec",
            "employer": "Central Heating New Zealand",
            "dates": "Apr 2013 - Jun 2015",
            "location": "Christchurch, New Zealand",
            "description": "As the primary member of the design and marketing team, I was responsible for everything design and marketing-related and consistently juggled a combination of long-term, short- term and urgent projects simultaneously. <ul><li>Redesigned the company website by overhauling an incomplete custom WordPress theme with CSS and PHP, new plugins, and CRM integration.</li> <li>Customised page templates for implementation of the WooCommerce eCommerce plugin for company’s catalogue of over 500 products.</li> <li>Wrote SEO friendly copy for new pages.</li> <li>Edited images for use on site.</li> <li>Later evolved the site to a responsive design.</li> <li>Managed website new content and updates, provided monthly Google Analytics report summaries, and made changes to better improve the site UX.</li> <li>Updated the company’s visual identity including brochures, catalogues, internal documents, etc.</li> <li>Designed and developed templates, wrote content, managed campaigns for EDM using MailChimp.</li><li>Designed and wrote copy for print advertisements for B2B and B2C magazines and newspapers.</li> <li>Wrote articles and case studies targeted at the retail, plumbing and architecture markets.</li> <li>Explained rationale for concepts and technologies in laymen’s terms to relevent team members.</li> <li>Liaised with printing companies, consultants, and coworkers as required to get projects done efficiently.</li> <li>Resolved last-minute emergencies like website going down at 5pm on a Friday.</li></ul>"
        },
        {
            "title": "Design and Marketing Manager",
            "employer": "AcademyX",
            "dates": "Dec 2012 - Mar 2013",
            "location": "San Francisco, CA, USA (working remotely from New Zealand)",
            "description": "In this role, I designed all company advertisements and promotional materials, providing a cohesive aesthetic for the company. Additionally, I managed website updates to content and code and executed online marketing strategies. <ul><li>Designed and coded e-newsletters using HTML and CSS in Dreamweaver, ensuring that code would translate properly into a variety of email clients.</li> <li>Researched topics and wrote content for e-newsletters.</li> <li>Updated web pages with content changes, added rich snippets, and unified styling for over 500 pages.</li> <li>Rewrote and coded web page content for better SEO.</li> <li>Increased Facebook page activity with engaging content.</li></ul>"
        },
        {
            "title": "Training and Operations Coordinator",
            "employer": "AcademyX",
            "dates": "Jun 2011 - Dec 2012",
            "location": "San Francisco, CA, USA",
            "description": "This role fully utilised my attention to detail, making sure that all of our San Francisco branch classes met company standards for excellence. In a small office, it was essential that I gave 110% each day, ensured that my work was up to par, and wore as many hats as the day required, as any mistake could cost the company thousands of dollars. I directly supported the CEO in day-to-day operations as well as long term growth projects, design tasks, and customer retention, and assigned responsibilities as needed to the Administrative Assistant. <ul><li>Managed over 100 instructors and assigned teaching responsibilities to them.</li> <li>Scheduled public enrolment and private computer training classes, ensuring that all computer equipment was functional and that sufficient training materials were prepared.</li> <li>Designed new brochure, book cover, class catalogue, flyers, and banners.</li> <li>Promoted and maintained government funded training programs by assisting customers and working with government liaisons.</li> <li>Managed emergencies such as whe an instructor failed to show up for a full class at 9am (where the students have paid $400 USD to attend) or when a student became violently ill during a class.</li> <li>Answered questions and mediated customer and instructor concerns as lead customer service representative and go-to employee for knowledge on our services and operations.</li> <li>Averaged over 70 emails per day in addition to other responsibilities.</li></ul>"
        },
        {
            "title": "Administrative Assistant",
            "employer": "AcademyX",
            "dates": "Feb 2011 - May 2011",
            "location": "San Francisco, CA, USA",
            "description": "As the first face that customers saw when they walked in, I set the tone for an enjoyable experience at the company’s facilities. I assisted all other staff members, from accountant to CEO, with their administrative needs while providing customer service and light IT support in the classroom. <ul><li>Addressed customer enquiries and concerns.</li> <li>Organised office storage space, maintained clean and professional classrooms, and stocked supplies.</li> <li>Consulted training calendar and enrolment lists to stock books and class materials for all classes on site and off site.</li> <li>Installed software and solved technical issues ranging from network connectivity to malfunctioning hardware to computer re-imaging.</li> <li>Received Employee of the Month the only month this award was offered in my almost two years at the company (and was allowed to keep the certificate displayed at my desk for my entire tenure there).</li></ul>"
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

work.display();

/*****************
    PROJECTS
*****************/

var projects = {
    "projects": [
        {
            "title": "Shaina Koval Design & Illustration",
            "dates": "Dec 2010 - Present",
            "images": [
                "images/shaina-website-home-desktop.png",
                "images/shaina-website-project-desktop.png",
                "images/shaina-website-home-mobile.png"
            ],
            "description": "Design and illustration work"
        },
        {
            "title": "Example",
            "dates": "Dates",
            "images": [
                "images/shaina-website-home-desktop.png",
                "images/shaina-website-project-desktop.png",
                "images/shaina-website-home-mobile.png"
            ],
            "description": "Example of stuff"
        }
    ]

}

projects.display = function() {
    for (project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
}

projects.display();

/*****************
    EDUCATION
*****************/

var education = {
    "schools": [
        {
            "name": "Vassar College",
            "dates": "August 2007 - June 2009",
            "location": "Poughkeepsie, NY, USA",
            "url": "http://www.vassar.edu"
        },
        {
            "name": "Pratt Institute",
            "graduation": "February 2010",
            "degree": "BFA",
            "major": "Communications Design",
            "location": "Brooklyn, NY, USA",
            "url": "http://www.pratt.edu"
        }
    ],
    "training": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "Oct 2015 - Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "PHP",
            "school": "Codecademy",
            "date": "Present",
            "url": "https://www.codecademy.com/learn/php"
        },
        {
            "title": "Responsive Web Design",
            "school": "Dynamic Web Training",
            "date": "Jan 2015",
            "url": "https://www.dynamicwebtraining.com.au/mobile-website-and-app-training/responsive-web-design-course"
        },
        {
            "title": "InDesign Beyond the Basics",
            "school": "Yoobee School of Design",
            "date": "Sep 2014",
            "url": "http://www.yoobee.ac.nz/study/graphic-design/indesign-beyond-the-basics/"
        },
        {
            "title": "24-Evening Online Marketing",
            "school": "AcademyX",
            "date": "Oct - Dec 2012",
            "url": "https://www.academyx.com/training/san_francisco/programs/web-marketing/"
        }
    ]
}

//Log Clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//Add Fancy Map
$("#mapDiv").append(googleMap);