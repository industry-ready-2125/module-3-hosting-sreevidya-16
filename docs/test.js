
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  if (validateStep(current)) {
    slidePage.style.marginLeft = "-25%";
    updateStep(current);
    current += 1;
  }
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  if (validateStep(current)) {
    slidePage.style.marginLeft = "-50%";
    updateStep(current);
    console.log(current);
    current += 1;
  }
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  if (validateStep(current)) {
    slidePage.style.marginLeft = "-75%";
    updateStep(current);
    console.log(current);
    current += 1;
  }
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

  

function validateStep(step) {
    const currentPage = document.querySelectorAll(".page")[current - 1];
    const requiredInputs = currentPage.querySelectorAll("input[required], select[required]");
  
    for (const input of requiredInputs) {
      if (!input.value) {
        alert("Please fill in all required fields before proceeding.");
        return false;
      }
    }
  
    if (current === 2) {
      const emailInput = currentPage.querySelector("input[type='text']");
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const phoneInput = currentPage.querySelector("input[type='number']");
      const phoneValue = phoneInput.value;
      const phonePattern = /^[6789]\d{9}$/;
      if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        return false;
      }
      if (!phonePattern.test(phoneValue)) {
        alert("Please enter a valid 10-digit Indian phone number.");
        return false;
      }
    }
  
    if (current === 3) {
      const dobInput = currentPage.querySelector("input[type='date']");
      const dobValue = dobInput.value;
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  
      if (!datePattern.test(dobValue)) {
        alert("Please enter a valid date of birth.");
        return false;
      }
      function AgeValid(dateOfBirth, ageLimit) {
        const dob = new Date(dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
      
        // Check if the user's age is less than the age limit (e.g., 18)
        if (age < ageLimit) {
          return false; // Age is not valid
        }
      
        return true; // Age is valid
      }
      
      // Add your AgeValid function to check the age here
      // Example: if (!AgeValid(dobValue, 150)) {
      //   alert("Your age must be less than 150 years.");
      //   return false;
      // }
    }
  
    // Add an else clause to return true when all conditions pass
    return true;
  }
  
//   let formsubEl = document.getElementById("formsub");
//   formsubEl.addEventListener("submit", function (event) {
//     if (!validateStep(current)) {
//       event.preventDefault();
//     }
//   });


  function updateStep(step) {
    bullet[step - 1].classList.add("active");
    progressCheck[step - 1].classList.add("active");
    progressText[step - 1].classList.add("active");
  }
  
  submitBtn.addEventListener("click", function() {
    const currentPage = document.querySelectorAll(".page")[current - 1];
    const requiredInputs = currentPage.querySelectorAll("input[required], select[required]");
    const closePopupButton = document.getElementById("close-popup");
  
    // Check if any required fields are empty
    let isEmpty = false;
    for (const input of requiredInputs) {
      if (!input.value) {
        isEmpty = true;
        break;
      }
    }
  
    if (isEmpty) {
      alert("Please fill in all required fields before submitting.");
    } else {
      // Show the registration success message
      registrationSuccessMessage.style.display = "block";
  
      // Redirect to the home page after a delay (e.g., 2 seconds)
      setTimeout(function() {
        window.location.href = "./index.html";
      }, 2000); // Adjust the delay as needed
    }
  });
  
  // Close the registration success message when the "Close" button is clicked
  closePopupButton.addEventListener("click", function() {
    registrationSuccessMessage.style.display = "none";
  });
  
  