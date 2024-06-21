document.addEventListener("DOMContentLoaded", function () {
  let mottoContents = document.querySelectorAll(".motto-content");

  mottoContents.forEach(function (content) {
    let iconElement = content.querySelector("i");

    iconElement.addEventListener("click", function (event) {
      event.preventDefault();

      let destinationUrl = "#";

      window.location.href = destinationUrl;
    });
  });
});
