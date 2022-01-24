// Collecting links and making event listeners to mak ethe corresponding divs show
// Collecting links
let homelinks = document.querySelectorAll(".home-link");
let hobbieslinks = document.querySelectorAll(".hobbies-link");
let skillslinks = document.querySelectorAll(".skills-link");

let home = document.querySelector(".home");
let hobbies = document.querySelector(".hobbies");
let skills = document.querySelector(".skills");
let hometop = document.querySelector(".home-top");
let hobbiestop = document.querySelector(".hobbies-top");
let skillstop = document.querySelector(".skills-top");

//making event listeners

homelinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.remove("hide");
        hobbies.classList.add("hide");
        skills.classList.add("hide");
        hometop.classList.add("active-head");
        hobbiestop.classList.remove("active-head");
        skillstop.classList.remove("active-head");
    });
})

hobbieslinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.add("hide");
        hobbies.classList.remove("hide");
        skills.classList.add("hide");
        hometop.classList.remove("active-head");
        hobbiestop.classList.add("active-head");
        skillstop.classList.remove("active-head");
    });
})

skillslinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.add("hide");
        hobbies.classList.add("hide");
        skills.classList.remove("hide");
        hometop.classList.remove("active-head");
        hobbiestop.classList.remove("active-head");
        skillstop.classList.add("active-head");
    });
})
