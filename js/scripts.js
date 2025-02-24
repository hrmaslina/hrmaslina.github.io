window.addEventListener("scroll", function () {
    const videoContainer = document.getElementById("responsiveVideoContainer");
    const isSmallScreen = window.innerWidth < 1024; // Detecta pantallas menores a 1024px
    const newWidth = isSmallScreen ? "90%" : "85%"; // 90% si es menor a 1024px, sino 85%
  
    if (window.scrollY > 120) {
      videoContainer.style.width = newWidth;
      videoContainer.style.borderRadius = "30px";
    } else {
      videoContainer.style.width = "100%";
      videoContainer.style.borderRadius = "0px";
    }
  });
  
  // Agrega transición para suavizar el cambio
  document.getElementById("responsiveVideoContainer").style.transition = "all 0.5s ease-in-out";

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carrousel = document.getElementById('carrousel');
  
  // Función para obtener el desplazamiento según el tamaño de la pantalla
  function getScrollAmount() {
      return window.innerWidth < 768 ? 265 : 730;
  }
  
  // Función para mover el carrusel a la izquierda
  prevBtn.addEventListener('click', () => {
      const maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
  
      // Solo desplazar si no estamos en el principio
      if (carrousel.scrollLeft > 0) {
          carrousel.scrollBy({
              left: -getScrollAmount(),
              behavior: 'smooth'
          });
      }
  });
  
  // Función para mover el carrusel a la derecha
  nextBtn.addEventListener('click', () => {
      const maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
  
      // Solo desplazar si no hemos llegado al final
      if (carrousel.scrollLeft < maxScrollLeft) {
          carrousel.scrollBy({
              left: getScrollAmount(),
              behavior: 'smooth'
          });
      }
  });

// Seleccionar todas las cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const modalId = card.getAttribute('data-modal');
        
        // Cargar el contenido del modal de manera dinámica con fetch()
        fetch(`modals/${modalId}.html`)
            .then(response => response.text())
            .then(modalContent => {
                // Inyectar el contenido en el modalContainer
                document.getElementById('modalContainer').innerHTML = modalContent;

                // Mostrar el modal (usando el método de Bootstrap para mostrarlo)
                const modal = new bootstrap.Modal(document.getElementById(modalId));
                modal.show();
            });
    });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-close')) {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.classList.remove('show');
        }
    }
});

