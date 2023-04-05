// Get all dropdown menus
var dropdowns = document.querySelectorAll(".dropdown");

// Loop through the dropdown menus and add event listeners
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("mouseover", showDropdown);
  dropdowns[i].addEventListener("mouseout", hideDropdown);
  dropdowns[i].addEventListener("click", toggleDropdown);
}

// Function to show the dropdown menu on mouseover
function showDropdown() {
  this.querySelector(".dropdown-menu").style.display = "block";
}

// Function to hide the dropdown menu on mouseout
function hideDropdown() {
  this.querySelector(".dropdown-menu").style.display = "none";
}

// Function to toggle the dropdown menu on click
function toggleDropdown(event) {
  event.preventDefault();
  var menu = this.querySelector(".dropdown-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}