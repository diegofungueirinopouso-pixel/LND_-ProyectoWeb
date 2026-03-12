window.addEventListener("load", function () {
  const titulo = document.getElementById("titulo");

  titulo.style.transition = "all 1.2s ease";
  titulo.style.opacity = "1";
  titulo.style.transform = "scale(1)";

  setTimeout(() => {
    titulo.style.animation = "palpitar 1.5s infinite alternate";
  }, 1200);
});