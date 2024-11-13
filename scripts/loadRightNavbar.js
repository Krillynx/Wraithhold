// Load the navbar
function loadNavbar() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });
}

// Load the right column navigation
function loadRightNav() {
  fetch("rightNav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("right-nav-container").innerHTML = data;
    });
}

// Call both functions on page load
document.addEventListener("DOMContentLoaded", function() {
  loadNavbar();
  loadRightNav();
});
