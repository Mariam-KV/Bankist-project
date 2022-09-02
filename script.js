"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".hide");
let btnOpenModal = document.querySelector(".open");

function show() {
  overlay.style.display = "block";
  modal.style.display = "block";
}
function hide() {
  modal.style.display = "none";
  overlay.style.display = " none";
}

btnCloseModal.addEventListener("click", hide);
btnOpenModal.addEventListener("click", show);

let btnLearn = document.getElementById("learn");
let section1 = document.getElementById("Features");
btnLearn.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

// event delegation

let nav = document.getElementById("nav_list");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  let id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  e.target.classList.contains("clicking");
});
//DOM traversing

let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let buttons = document
  .querySelector(".lineOfButtons")
  .addEventListener("click", function (el) {
    if (el.target.classList.contains("loans")) {
      info2.classList.remove("hidecontent");
      adding(info1, info3);
    }
    if (el.target.classList.contains("close")) {
      adding(info2, info1);
      info3.classList.remove("hidecontent");
    }
    if (el.target.classList.contains("transfer")) {
      info1.classList.remove("hidecontent");
      adding(info2, info3);
    }
  });

function adding(first, second) {
  first.classList.add("hidecontent");
  second.classList.add("hidecontent");
}

// navbar
let links = document.querySelectorAll(".clicked");
let handleOpacity = function (event, opacity) {
  links.forEach((el) => {
    if (event.target === el) {
      el.style.opacity = opacity;
    }
  });
};

document.querySelector(".nav").addEventListener("mouseover", function (e) {
  handleOpacity(e, 0.5);
});
document.querySelector(".nav").addEventListener("mouseout", function (e) {
  handleOpacity(e, 1);
});

//lazy loading images

//reveal sections
let sections = document.querySelectorAll(".section");
function funcSection(entries) {
  let entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observerSection.unobserve(entry.target);
  }
}
let observerSection = new IntersectionObserver(funcSection, {
  null: 0,
  threshold: 0.1,
});
sections.forEach((el) => {
  observerSection.observe(el);
  el.classList.add("section--hidden");
});

let imgTargets = document.querySelectorAll("img[data-src]");

function func(entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
    imgObserver.unobserve(entry.target);
  });
}
let imgObserver = new IntersectionObserver(func, { root: null, threshold: 0 });
imgTargets.forEach((el) => imgObserver.observe(el));

let sliders = document.querySelectorAll(".slider-box");
let currSlide = 0;
sliders.forEach((el, index) => {
  el.style.transform = `translateX(${index * 110}%)`;
});

//sliders
let box = document.querySelector(".box");
let moveRight = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  move(currSlide);
};
let moveLeft = () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  move(currSlide);
};
let maxSlide = sliders.length;
let pointerRight = document
  .querySelector(".pointer-left")
  .addEventListener("click", moveLeft);

let pointerLeft = document
  .querySelector(".pointer-right")
  .addEventListener("click", moveRight);

let move = (slide) => {
  sliders.forEach((el, index) => {
    el.style.transform = `translateX(${(index - slide) * 110}%)`;
  });
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  }
  //same e.key === "ArrowRight" && moveLeft()
});
/* //dots
let dots = document.querySelector(".dots");
let createDots = function () {
  sliders.forEach((_, index) => {
    dots.insertAdjacentHTML(
      "beforeend",
      `
     <button class="dot" data-slide="${index}"></button>`
    );
  });
};
createDots();
dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    let slide = e.target.dataset.slide;
    move(slide);
  }
  dots.forEach((e) => {
    e.target.classList.remove("dot-active");
  });
  document
    .querySelector(`.dot[data-slide=${slide}]`)
    .classList.add("dot-active");
});
*/
let navBar2 = document.querySelector(".nav");

let header2 = document.querySelector(".container-first");
function func5(entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    navBar2.classList.add("sticky");
  } else {
    navBar2.classList.remove("sticky");
  }
}
let obesrver5 = new IntersectionObserver(func5, {
  null: 0,
  threshold: 0,
  rootMargin: "-80px",
});
obesrver5.observe(header2);
let navLinks = document.querySelector(".newmenu");
let x = document.querySelector(".x");
let svgHide = document.querySelector(".menu").addEventListener("click", () => {
  x.style.display = "block";
  navLinks.classList.add("make-menu");
  navLinks.style.display = "flex";
  navLinks.style.flexDirection = "column";
});
navLinks.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("clicked")) {
    x.style.display = "none";
    navLinks.classList.remove("make-menu");
    navLinks.style.display = "none";
  }
});
