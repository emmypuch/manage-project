const navLinks = document.querySelector("#navLinks ul");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function (e) {
  if (navLinks.style.display === "none") navLinks.style.display === "flex";
  else navLinks.style.display = "none";
});
