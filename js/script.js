document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.carrusel-container');
  const slides = document.querySelectorAll('.carrusel-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function moverCarrusel(direction) {
    index += direction;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => moverCarrusel(-1));
  nextBtn.addEventListener('click', () => moverCarrusel(1));

  setInterval(() => moverCarrusel(1), 3000);
});

document.addEventListener("mousemove", function (e) {
  const icon = document.getElementById("followIcon");
  if (icon) {
    icon.style.left = e.pageX + "px";
    icon.style.top = e.pageY + "px";
  }
});


document.getElementById("mi-boton").addEventListener("click", function () {
  alert("¡Hola! Gracias por visitar la página 😊");
});