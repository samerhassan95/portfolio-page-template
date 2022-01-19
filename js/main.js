//navbar
// variables
let topNav = document.querySelector(".topnav");
let bodyScroll = document.querySelector("html , body");
let buttons = document.querySelectorAll(".link");
console.log(topNav);
console.log(buttons);
console.log(bodyScroll);
//event
window.addEventListener("scroll", () => {
  if (bodyScroll.scrollTop >= 100) {
    topNav.classList.add("scrolling");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("scrolling");
    }
  } else if (bodyScroll.scrollTop == 0) {
    topNav.classList.remove("scrolling");
  }
});

//active class
let navBarLinks = document.querySelectorAll(".link");
for (let index = 0; index < navBarLinks.length; index++) {
  navBarLinks[index].addEventListener("click", () => {
    for (let i = 0; i < navBarLinks.length; i++) {
      navBarLinks[i].classList.remove("active");
    }
    navBarLinks[index].classList.add("active");
  });
}
