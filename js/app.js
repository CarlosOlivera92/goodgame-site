const currentUrl = window.location.pathname;
window.onscroll = function() {
    let header = document.getElementById("header");
    let carousel = document.getElementById("carousel");
    let carouselBottom = carousel ? carousel.offsetTop + carousel.offsetHeight : 0;
    let scrollThreshold = carouselBottom - 100; // Ajusta este valor a tu preferencia
  
    if (carousel && window.pageYOffset < scrollThreshold) {
      header.style.backgroundColor = "rgba(1, 1, 1, 0)"; /* Fondo transparente */
      header.style.position = "fixed"; /* Mantener la posición fija */
    } else {
      header.style.backgroundColor = "rgba(17, 17, 17, 1)"; /* Fondo sólido */
      header.style.position = "fixed"; /* Mantener la posición fija */
    }
  
    if (!carousel) {
      header.style.backgroundColor = "rgba(17, 17, 17, 1)"; /* Fondo sólido */
      header.style.position = "relative"; /* Cambiar la posición a relative */
    }
  };
  
  // Agregar esta línea de código para verificar si la página contiene un elemento con ID "carousel"
  if (!document.getElementById("carousel")) {
    let header = document.getElementById("header");
    header.style.backgroundColor = "rgba(17, 17, 17, 1)"; /* Fondo sólido */
    header.style.position = "relative"; /* Cambiar la posición a relative */
}

// Establecer la clase "active" en el enlace correspondiente
if (currentUrl === '/index.html') {
  document.getElementById('home-link').classList.add('active');
} else if (currentUrl === '/pages/nosotros.html') {
  document.getElementById('about-link').classList.add('active');
} else if (currentUrl === '/pages/contacto.html') {
  document.getElementById('contact-link').classList.add('active');
} else if (currentUrl === '/pages/noticias.html') {
  document.getElementById('news-link').classList.add('active');
} else if (currentUrl === '/pages/juegos.html') {
  document.getElementById('games-link').classList.add('active');
} 