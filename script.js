let adeline = document.getElementById("name"); 
let workResume = document.getElementById("work-resume");
let musicResume = document.getElementById("music-resume");



//add gradient sheen effect when hovering over text
adeline.addEventListener("mouseover", function addGradient () {
    adeline.classList.add("gradient");
});

adeline.addEventListener("animationend", function removeGradient() {
    adeline.classList.remove("gradient");
});


