document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "rightnav.html", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      document.getElementById("rightnav-container").innerHTML = xhr.responseText;
    } else {
      console.error("Failed to load nav:", xhr.status, xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("Error loading rightnav with XMLHttpRequest");
  };

  xhr.send();
});