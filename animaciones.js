const images = document.querySelectorAll('.carousel img');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => img.classList.toggle('active', i === index));
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// Avance automático cada 5 segundos
let interval = setInterval(nextImage, 5000); // cambia la imagen cada 5 segundos

// Controles manuales
document.querySelector('.next').addEventListener('click', () => {
  nextImage();
  resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevImage();
  resetInterval();
});

// Reiniciar el temporizador al usar botones
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextImage, 5000);
}
