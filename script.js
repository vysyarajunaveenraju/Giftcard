document.getElementById("surpriseButton").addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
      createBalloon();
    }
  });
  
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloons";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.left = Math.random() * window.innerWidth + "px";
    document.getElementById("balloons").appendChild(balloon);
  
    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }
  
  function getRandomColor() {
    const colors = ["#ff69b4", "#ff4500", "#ff6347", "#ffd700", "#32cd32"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  