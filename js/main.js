// ################## Start Bullets ###################
let bulletsNav = document.querySelector(".bullets-nav");
let bulletsList = document.querySelectorAll(".bullets-nav ul li");

bulletsList.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// ################## End Bullets ###################

// ################## Start Discover #################
let discover = document.querySelector(".desciover");
let descioverInfo = document.querySelector(".desciover-info");
let descioverImage = document.querySelector(".desciover-image");
// ################## End Discover #################

// ################## Start numbers #################
let numbersSection = document.querySelector(".numbers");
let ElementsCount = document.querySelectorAll(".numbers .item h4");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;

  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
// ################## End numbers #################

// ################## Start Our Pizza #################
let ourPizza = document.querySelector(".our-pizza");
let OurPizzaRight = document.querySelector(".our-pizza .box-right");
let OurPizzaLeft = document.querySelector(".our-pizza .box-left");
// ################## End Our Pizza #################

// ################## Start Offer #################
let offer = document.querySelector(".offers");
let boxRightImg = document.querySelector(".offers .box-right img");
let boxLeftImg = document.querySelector(".offers .box-left img");
let boxRightInfo = document.querySelector(".offers .box-right .box-info");
let boxleftInfo = document.querySelector(".offers .box-left .box-info");
// ################## End Offer #################

// ############## Start Event Section ##############

// Date I Need To Arrive To It , Date By MillySeconds
let dateSoon = new Date("Mar 18 2023 15:00:00").getTime();

let counter = setInterval(() => {
  // Time Now And Update It Every Second
  let dateNow = new Date().getTime();
  // Diffrence Between Date Now And Date I want To Arrive To It
  let dateDiff = dateSoon - dateNow;

  // Get Time Units
  // Setup Days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days .content p").innerHTML =
    days < 10 ? `0${days}` : days;

  // Setup Hours
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours .content p").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  // Setup Minutes
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes .content p").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  // Setup Seconds
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds .content p").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  // Check If Date Differnce < 0
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// ############## End Event Section ##############

// When Window Scroll
window.onscroll = function () {
  // Bullets And Desicover Section Effect
  if (window.scrollY >= discover.offsetTop - 200) {
    bulletsNav.style.right = "15px";
    descioverInfo.style.marginTop = "0px";
    descioverImage.style.right = "0px";
  } else {
    bulletsNav.style.right = "-100px";
  }
  // Our Pizza Section Effect
  if (window.scrollY >= ourPizza.offsetTop - 200) {
    OurPizzaRight.style.right = "0px";
    OurPizzaLeft.style.left = "0px";
  }
  // Offer Section Effect
  if (window.scrollY >= offer.offsetTop - 200) {
    boxRightImg.style.left = "0px";
    boxLeftImg.style.right = "0px";
  }
  if (window.scrollY >= offer.offsetTop - 100) {
    boxRightInfo.style.bottom = "0px";
    boxleftInfo.style.bottom = "0px";
  }
  // Numbers Section Effect
  if (window.scrollY >= numbersSection.offsetTop - 250) {
    if (!started) {
      ElementsCount.forEach((ele) => startCount(ele));
    }
    started = true;
  }
};

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();
