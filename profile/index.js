document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  const oren = document.getElementById("oren");

  oren.addEventListener("click", () => {
    score++;
    updateScore();
  });

  function updateScore() {
    document.getElementById("score").textContent = score;
  }
});
