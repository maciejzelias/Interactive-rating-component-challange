const mainPanel = document.querySelector(".panel");
const thankYouPanel = document.querySelector(".thank-you-panel");

const submitButton = document.getElementById("submit-button");

const rated = document.getElementById("rated");

const ratings = document.querySelectorAll(".rating");

let selectedRate;

submitButton.addEventListener("click", () => {
  if (selectedRate) {
    rated.innerHTML = selectedRate;
    thankYouPanel.classList.remove("hidden");
    mainPanel.classList.add("hidden");
  }
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    selectedRate = rating.innerHTML;
  });
});

//removing selectedRate when user ,,unclicks" the button
document.addEventListener("click", (event) => {
  let targetElement = event.target;
  let clickedOutside = true;
  ratings.forEach((rating) => {
    if (rating == targetElement) {
      clickedOutside = false;
    }
  });
  if (clickedOutside) {
    selectedRate = null;
  }
});
