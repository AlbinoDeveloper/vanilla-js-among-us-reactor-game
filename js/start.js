const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  startReactor.start();
  startButton.style.display = "none";
});
