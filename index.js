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

function openMenu() {
    var icon = document.getElementById("hamburger").textContent;
    var x = icon === "menu" ? "clear" : "menu";
    document.getElementById("hamburger").textContent = x;
}
