const navLinks = document.querySelector("#navLinks ul");
const toggleButton = document.querySelector(".toggleButton");

toggleButton.addEventListener("click", function (e) {
  if (navLinks.style.display === "none") navLinks.style.display = "flex";
  else navLinks.style.display = "none";
});
