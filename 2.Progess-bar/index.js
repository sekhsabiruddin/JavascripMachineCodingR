document.addEventListener("DOMContentLoaded", () => {
  let progressBar = document.getElementById("progress-bar");
  let startButton = document.getElementById("start");

  startButton.addEventListener("click", () => {
    let width = 0;
    let interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width + "%";
      }
    }, 100);
  });
});
