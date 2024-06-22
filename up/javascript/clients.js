document.addEventListener("DOMContentLoaded", function () {
  const links = [
    "#", // Placeholder for client 1
    "#", // Placeholder for client 2
    "#", // Placeholder for client 3
    "#", // Placeholder for client 4
    "#", // Placeholder for client 5
    "#", // Placeholder for client 6
    "#", // Placeholder for client 7
    "#", // Placeholder for client 8
  ];

  // the placeholders can be replaced with appropriate links once it comes down to it;

  // for now it is only created so it can be modified in the future;

  const images = document.querySelectorAll(".clients-content-image img");

  images.forEach(function (image) {
    const id = image.getAttribute("data-id");

    if (links[id]) {
      image.addEventListener("click", function () {
        window.location.href = links[id];
      });

      image.style.cursor = "pointer";
    }
  });
});
