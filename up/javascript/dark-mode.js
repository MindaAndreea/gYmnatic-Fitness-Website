let checkbox = document.querySelector('input[name="theme"]');
let htmlElem = document.documentElement;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    smoothTransition();
    htmlElem.setAttribute("data-theme", "dark");
  } else {
    smoothTransition();
    htmlElem.setAttribute("data-theme", "light");
  }
});

let smoothTransition = () => {
  htmlElem.classList.add("transition");
  window.setTimeout(() => {
    htmlElem.classList.remove("transition");
  }, 1000);
};
