let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let socialButtons = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

socialButtons.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

function cursor(e) {
  //console.log(e.pageX, e.pageY);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
