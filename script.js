console.log("Plasthetic Website Ready");

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){

        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

/* POPUP */

function openPopup(){

    document.getElementById("popup").style.display = "flex";

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}