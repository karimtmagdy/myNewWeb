//! |> Start Dark Mode
const toggleSwitch = document.getElementById("toggleSwitch");
circle = document.getElementById("circle");
body = document.querySelector("body");

toggleSwitch.onclick = function () {
  toggleSwitch.classList.toggle("dark");
  circle.classList.toggle("dark");
  body.classList.toggle("dark");
};
//! |> Start Progress
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    console.log("good");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
//! |> Start Toggle Menu
const toggleMenu = document.getElementById("toggleMenu")

toggleMenu.onclick = function(){
  toggleMenu.classList.toggle("active")
}
//! |> Toggle Scroll Top
const scrollTop = document.getElementById("scrollTop");
(window.onscroll = function () {
  window.scrollY >= 600
    ? (scrollTop.style.display = "block")
    : (scrollTop.style.display = "none");
}),
  (scrollTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
