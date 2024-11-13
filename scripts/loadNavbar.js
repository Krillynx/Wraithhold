document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/navbar.html", true); // Ensure the path to `navbar.html` is correct here

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      document.getElementById("navbar-container").innerHTML = xhr.responseText;
    } else {
      console.error("Failed to load navbar:", xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error loading navbar with XMLHttpRequest");
  };

  xhr.send();
});
