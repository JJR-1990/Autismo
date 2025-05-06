console.log("El archivo script.js se cargó correctamente");

document.getElementById("mi-boton").addEventListener("click", saludar);

function saludar() {
  alert("¡Gracias por visitar nuestra página!");
}


let index = 0;

function moverCarrusel(direccion) {
  const slides = document.querySelectorAll(".carrusel-slide");
  index += direccion;
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index >= slides.length) {
    index = 0;
  }
  const nuevoTransform = -index * 100;
  document.querySelector(".carrusel-container").style.transform = `translateX(${nuevoTransform}%)`;
}

// Configurar carrusel para que avance automáticamente cada 3 segundos
setInterval(() => {
  moverCarrusel(1);
}, 3000);