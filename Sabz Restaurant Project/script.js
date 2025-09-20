`use strict`;
const scrollLink = document.querySelectorAll(`a[href ^="#"]`);

const emptyBtn = document.querySelector(".btn");
const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");

// For Scrolling
scrollLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// For Empty
emptyBtn.addEventListener("click", function () {
  fullName.value = "";
  email.value = "";
});
