// Collecting links and making event listeners to mak ethe corresponding divs show
// Collecting links
let homelinks = document.querySelectorAll(".home-link");
let hobbieslinks = document.querySelectorAll(".hobbies-link");
let skillslinks = document.querySelectorAll(".skills-link");

let home = document.querySelector(".home");
let hobbies = document.querySelector(".hobbies");
let skills = document.querySelector(".skills");

//making event listeners

homelinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.remove("hide");
        hobbies.classList.add("hide");
        skills.classList.add("hide");
    });
})

hobbieslinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.add("hide");
        hobbies.classList.remove("hide");
        skills.classList.add("hide");
    });
})

skillslinks.forEach((link) => {
    link.addEventListener("click", () => {
        home.classList.add("hide");
        hobbies.classList.add("hide");
        skills.classList.remove("hide");
    });
})