//STICKY NAV
const navbar = document.getElementById("sidebar");
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")

  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {stickyNav()};