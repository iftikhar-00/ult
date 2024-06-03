$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});


// card slider=======================================

document.addEventListener("DOMContentLoaded", function () {
    const cardSlider = document.querySelector(".card-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let translateValue = 0;
    const cardWidth = document.querySelector(".card").offsetWidth;

    nextBtn.addEventListener("click", function () {
        translateValue -= cardWidth;
        if (translateValue < -cardWidth * 3) {
            translateValue = 0;
        }
        cardSlider.style.transform = `translateX(${translateValue}px)`;
    });

    prevBtn.addEventListener("click", function () {
        translateValue += cardWidth;
        if (translateValue > 0) {
            translateValue = -cardWidth * 3;
        }
        cardSlider.style.transform = `translateX(${translateValue}px)`;
    });
});
// cardSlider=====================================

// accordion faqs =====================================
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

// accordion faqs ========================================


// dialogue book ------------------------------
// Function to open the pop-up
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// dialogue book --------------------------------