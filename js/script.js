const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const sideNavbar = document.querySelector(".navbar-nav");
const backdrop = document.querySelector(".backdrop");

menuOpenButton.addEventListener("click", ()=>{
    sideNavbar.classList.add("active");
    backdrop.classList.add("active");
});

menuCloseButton.addEventListener("click", ()=>{
    sideNavbar.classList.remove("active");
    backdrop.classList.remove("active");
});

backdrop.addEventListener("click", ()=>{
    sideNavbar.classList.remove("active");
    backdrop.classList.remove("active");
});


const username = document.querySelector("#username");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const contactForm = document.querySelector("#contact-form");
const btnSubmit = document.querySelector("#submit-button");



/*
    Initializing Email Js
*/
window.addEventListener("DOMContentLoaded",function(){
    (function() {
        emailjs.init("P2OhtkZV0kYTDYNI6");
    })();

    contactForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        const params = {
        username: username.value,
        email: email.value,
        message: message.value
        };

        emailjs.send("service_cw3y7ke", "template_mnyw95k", params)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
    });
});


// Initialize Swipper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 35,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

});
