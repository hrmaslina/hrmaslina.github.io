document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("responsiveVideo");
    const source = document.getElementById("videoSource");
    let currentWidth = window.innerWidth; // Guardamos el tamaño inicial de la ventana
    let videoLoaded = false; // Para asegurarnos de no recargar el video innecesariamente

    // Función para cambiar el video solo si el tamaño de la ventana es menor a 768px
    function updateVideoSource() {
      const newWidth = window.innerWidth;

      // Evitar recargar el video si ya está cargado correctamente y no ha habido un cambio
      if (newWidth === currentWidth && videoLoaded) return;

      // Cambiar la fuente solo si la pantalla es menor a 768px
      if (newWidth < 768) {
        source.src = "/assets/video/portrait-main-video.mp4"; // Versión vertical
      } else {
        source.src = "/assets/video/landscape-main-video.mp4"; // Versión horizontal
      }

      // Recargar y reproducir solo si la fuente cambió
      video.load();
      video.play();
      currentWidth = newWidth; // Actualizamos el valor de la ventana
      videoLoaded = true; // Marcamos el video como cargado
    }

    // Llamar a la función para cargar el video según el tamaño de la pantalla
    updateVideoSource();

    // Escuchar cambios de tamaño de la ventana solo si la ventana es menor a 768px
    window.addEventListener("resize", function () {
      if (window.innerWidth < 768) {
        updateVideoSource();
      }
    });
  });
