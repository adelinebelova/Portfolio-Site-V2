let adeline = document.getElementById("name"); 
let workResume = document.getElementById("work-resume");
let musicResume = document.getElementById("music-resume");
let emailIcon = document.getElementById("email");


//add gradient sheen effect when hovering over text
adeline.addEventListener("mouseover", function addGradient () {
    adeline.classList.add("gradient");
});

adeline.addEventListener("animationend", function removeGradient() {
    adeline.classList.remove("gradient");
});

//copy link popup 
emailIcon.addEventListener('click', function copyLink() {
    navigator.clipboard.writeText(emailIcon.classList);

        //SweetAlert popup
        swal("Email Copied: adelinebelova@yahoo.com");
});
