document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  document
    .querySelectorAll(".showcase-content-gradient-text")
    .forEach((element) => {
      if (selectedText && element.contains(selection.anchorNode)) {
        element.classList.add("selected", "transition-gradient-text");
        window.setTimeout(() => {
          element.classList.remove("transition-gradient-text");
        }, 1000);
      } else {
        element.classList.remove("selected");
      }
    });
});
