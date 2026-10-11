
// Esperamos a que todo el HTML esté completamente cargado en la página
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validamos que las variables existan en el HTML
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const botonCerrar = document.querySelector('.lightbox-cerrar');

    if (!lightbox || !lightboxImg || !botonCerrar) {
        console.error("Falta el HTML del Lightbox al final de tu página.");
        return;
    }

    // 2. Buscamos todas las imágenes de la galería
    const fotosGaleria = document.querySelectorAll('.contenedor-trabajos .trabajo .thumb img');
    
    console.log(`Se encontraron ${fotosGaleria.length} fotos en la galería.`); // Mensaje de prueba en consola

    // 3. Agregamos el clic a cada foto
    fotosGaleria.forEach(foto => {
        foto.style.cursor = 'pointer';

        foto.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = foto.src;
        });
    });

    // 4. Evento para cerrar con la (X)
    botonCerrar.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // 5. Evento para cerrar al hacer clic en el fondo negro
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

