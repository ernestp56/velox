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
document.getElementById('ham').addEventListener('click', () => {
  document.getElementById('ham').classList.toggle('active');
  var icon = document.getElementById("ham").textContent;
  var x = icon === "menu" ? "clear" : "menu";
  if (icon === "menu") {
      document.getElementById("menu-wrapper").classList.toggle("active");
      document.body.style.overflowY = "hidden"
  } else {
    document.getElementById("menu-wrapper").classList.toggle("active");
    document.body.style.overflowY = "auto"
  }
})
