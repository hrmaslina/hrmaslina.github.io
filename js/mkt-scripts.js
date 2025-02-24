window.addEventListener("scroll", function () {
  let content = document.querySelector(".content");
  let serviceBoxes = document.querySelectorAll(".service-box h5");
  let banner = document.querySelector(".banner");
  let th4 = document.querySelector(".th4");

  if (window.scrollY > 50) {
    content.classList.add("scrolled");
  } else {
    content.classList.remove("scrolled");
  }

  if (window.innerWidth > 768) {
    // Si la pantalla no es móvil
    if (window.scrollY > 50) {
      serviceBoxes.forEach(function (h5) {
        h5.style.opacity = 1; // Hacerlo visible
        banner.style.background = "white";
        th4.style.color = "black"
      });
    } else {
      serviceBoxes.forEach(function (h5) {
        h5.style.opacity = 0; // Ocultarlo
        banner.style.background = "black";
        th4.style.color = "white"
      });
    }
  } else {
    // Si es móvil, siempre ocultar
    serviceBoxes.forEach(function (h5) {
      h5.style.opacity = 0; // Ocultar siempre en móvil
    });
  }
});
