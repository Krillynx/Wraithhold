// JavaScript to load navbar.html content
document.addEventListener("DOMContentLoaded", function () {
  fetch("..\navbar.html")
    .then(response => response.text())
    .then(data => {
      // Create a container for the navbar and insert the HTML
      const navbarContainer = document.createElement("div");
      navbarContainer.innerHTML = data;
      document.body.insertBefore(navbarContainer, document.body.firstChild);
    })
    .catch(error => console.error("Error loading navbar:", error));
});
