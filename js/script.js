document.addEventListener("DOMContentLoaded", () => {
    const botonesCompra = document.querySelectorAll(".btn-comprar");

    botonesCompra.forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = boton.getAttribute("data-producto");
            alert(`Has añadido "${producto}" al carrito.`);
        });
    });

    // Carrusel de imágenes
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-container img");
    let index = 0;

    function nextImage() {
        index = (index + 1) % images.length;
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextImage, 2000); // Cambia la imagen cada 3 segundos
});
