const loadButton = document.getElementById("loadButton");

loadButton.addEventListener("click", () => {
  startReactor.load();
  loadButton.style.display = "none";
  startButton.style.display = "";
});
