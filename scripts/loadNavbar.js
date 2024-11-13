// loadNavbar.js
document.addEventListener("DOMContentLoaded", function () {
  // Load the navbar HTML into the navbar-container
  const navbarRequest = new XMLHttpRequest();
  navbarRequest.open("GET", "navbar.html", true); // Ensure this path is correct

  navbarRequest.onload = function () {
    if (navbarRequest.status >= 200 && navbarRequest.status < 300) {
      document.getElementById("navbar-container").innerHTML = navbarRequest.responseText;
    } else {
      console.error("Failed to load navbar:", navbarRequest.status, navbarRequest.statusText);
    }
  };

  navbarRequest.onerror = function () {
    console.error("Error loading navbar with XMLHttpRequest");
  };
  navbarRequest.send();

  // Load the right navigation HTML into the right-nav-container
  const rightNavRequest = new XMLHttpRequest();
  rightNavRequest.open("GET", "right-nav.html", true); // Ensure this path is correct

  rightNavRequest.onload = function () {
    if (rightNavRequest.status >= 200 && rightNavRequest.status < 300) {
      document.getElementById("right-nav-container").innerHTML = rightNavRequest.responseText;
    } else {
      console.error("Failed to load right navigation:", rightNavRequest.status, rightNavRequest.statusText);
    }
  };

  rightNavRequest.onerror = function () {
    console.error("Error loading right navigation with XMLHttpRequest");
  };
  rightNavRequest.send();
});
