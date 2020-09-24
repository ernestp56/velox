window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggleMenu() {
    var icon = document.getElementById("hamburger").textContent;
    var x = icon === "menu" ? "clear" : "menu";
    if (icon === "menu") {
        document.getElementById("hamburger").textContent = x;
        document.getElementById("myNav").style.height = "100%";
        document.body.style.overflowY = "hidden"
    } else {
        document.getElementById("hamburger").textContent = x;
        document.getElementById("myNav").style.height = "0%";
        document.body.style.overflowY = "auto"
    }
}
