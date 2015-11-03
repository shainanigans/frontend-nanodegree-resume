var name="Shaina Koval";
var formattedName = HTMLheaderName.replace("%data%", name);

var role="Designer and Front-End Dev";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Graphic Design", "Web Design", "HTML","CSS","Photoshop", "InDesign", "Illustrator"]

var bio = {
    "name": "Shaina Koval",
    "role": "Designer and Front-End Dev",
    "contactInfo": "www.shainakoval.com",
    "pictureURL": "images/shaina-smile-crop.png",
    "welcomeMessage": "It's nice to meet you.",
    "skills": skills
}

$("#main").append(bio.name);