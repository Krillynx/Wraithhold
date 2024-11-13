document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar.html") // Ensure the path is correct
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});
