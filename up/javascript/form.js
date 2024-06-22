const slidePage = document.querySelector(".register-content-form-page");
const firstNextBtn = document.querySelector(".next-1");

const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");

const thirdPrevBtn = document.querySelector(".prev-3");
const fourthNextBtn = document.querySelector(".next-4");

const fourthPrevBtn = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");

const progressStep = document.querySelectorAll(".register-progress-step");
const progressNumber = document.querySelectorAll(
  ".register-progress-step span"
);
const progressTickMark = document.querySelectorAll(".fa-check");

let max = 5;
let current = 1;

function forward() {
  progressStep[current - 1].classList.add("active");
  progressNumber[current - 1].classList.add("active");
  progressTickMark[current - 1].classList.add("active");
  current++;
}

function backward() {
  progressStep[current - 2].classList.remove("active");
  progressNumber[current - 2].classList.remove("active");
  progressTickMark[current - 2].classList.remove("active");
  current--;
}

firstNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-25%";
  forward();
});

firstPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "0";
  backward();
});

secondNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-66.5%";
  forward();
});

secondPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-25%";
  backward();
});

thirdNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-150%";
  forward();
});

thirdPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-66.5%";
  backward();
});

fourthNextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-250%";
  forward();
});

fourthPrevBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-150%";
  backward();
});

submitBtn.addEventListener("click", () => {
  setTimeout(() => {
    alert(
      "Your form has been successfully submitted. Thank you and see you soon!"
    );
    location.reload();
  }, 1000);
  forward();
});
