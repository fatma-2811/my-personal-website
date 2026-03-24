
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
    if (window.scrollY > 800) {
        navbar.style.backgroundColor = "#07A097";
      

    }
    else {
        navbar.style.backgroundColor = "white";
  
    }
};

