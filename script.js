console.log("Plasthetic Website Ready");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.05)";

    }

    else{

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