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

// Mobile Hamburger menu function
function toggleMenu() {
    var icon = document.getElementById("ham").textContent;
    var x = icon === "menu" ? "clear" : "menu";
    if (icon === "menu") {
        document.getElementById("ham").textContent = x;
        document.getElementById("menu-wrapper").classList.toggle("active");
        document.body.style.overflowY = "hidden"
    } else {
        document.getElementById("ham").textContent = x;
        document.getElementById("menu-wrapper").classList.toggle("active");
        document.body.style.overflowY = "auto"
    }
}

const toggleHam = function(e) {
  document.getElementById('sm_menu_ham').classList.toggle('open');
  document.getElementById('sm_menu_wrapper').classList.toggle('active');
  document.getElementsByTagName('BODY')[0].classList.toggle('mobile-menu-open')
}